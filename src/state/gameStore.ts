import { useEffect, useMemo, useState } from 'react';
import { stages } from '../data/stages';
import { upgrades } from '../data/upgrades';
import { GameState, ResourceState, UpgradeEffects } from '../types/game';
import { CLICK_CASH, CLICK_COMPUTE } from '../systems/economy';
import { createNotification } from '../systems/events';
import { loadGame, resetGameSave, saveGame, SAVE_VERSION } from '../systems/saveLoad';
import { getUpgradeCost } from '../systems/upgrades';
import { getNextUnlockableStage } from '../systems/stages';
import { runTick } from '../systems/tick';

const baseResources: ResourceState = {
  cash: 0,
  compute: 0,
  computePerSecond: 0,
  powerUsed: 120,
  powerLimit: 500,
  heat: 35,
  heatGeneration: 0,
  heatGenerationMultiplier: 1,
  coolingPower: 0,
  attention: 0,
  hype: 0,
  hypePerSecond: 0,
  reliability: 0,
  safety: 0,
  automation: 0,
  cashMultiplier: 1,
  computeMultiplier: 1,
  currentStage: 1,
  breakerTrippedUntil: null,
  thermalEmergencyUntil: null,
  totalClicks: 0,
  totalComputeGenerated: 0,
  totalCashEarned: 0
};

const initialState: GameState = {
  version: SAVE_VERSION,
  resources: baseResources,
  upgradeLevels: {},
  unlockedStages: [1],
  notifications: [createNotification('Welcome to LocalMaxxing. Tiny rigs. Tiny wins. Big numbers later.')]
};

const applyEffects = (resources: ResourceState, effects: UpgradeEffects, levelDelta: number): ResourceState => {
  const adjust = (value: number | undefined): number => (value ?? 0) * levelDelta;
  return {
    ...resources,
    computePerSecond: resources.computePerSecond + adjust(effects.computePerSecond),
    powerUsed: resources.powerUsed + adjust(effects.powerUsed),
    powerLimit: resources.powerLimit + adjust(effects.powerLimit),
    heatGeneration: resources.heatGeneration + adjust(effects.heatGeneration),
    heatGenerationMultiplier: resources.heatGenerationMultiplier + adjust(effects.heatGenerationPercent),
    coolingPower: resources.coolingPower + adjust(effects.coolingPower),
    cashMultiplier: resources.cashMultiplier + adjust(effects.cashMultiplier),
    computeMultiplier: resources.computeMultiplier + adjust(effects.computeMultiplier),
    attention: resources.attention + adjust(effects.attention),
    hype: resources.hype + adjust(effects.hype),
    hypePerSecond: resources.hypePerSecond + adjust(effects.hypePerSecond),
    reliability: resources.reliability + adjust(effects.reliability),
    safety: resources.safety + adjust(effects.safety),
    automation: resources.automation + adjust(effects.automation)
  };
};

export const useGameStore = () => {
  const [game, setGame] = useState<GameState>(() => loadGame() ?? initialState);

  useEffect(() => {
    const id = window.setInterval(() => {
      setGame((prev) => {
        const next = runTick(prev, Date.now());
        const unlockable = getNextUnlockableStage(next.resources, next.unlockedStages);
        if (unlockable) {
          next.unlockedStages.push(unlockable.id);
          next.resources.currentStage = unlockable.id;
          next.notifications.unshift(createNotification(unlockable.unlockedText));
        }
        return next;
      });
    }, 1000);
    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    const id = window.setInterval(() => saveGame(game), 5000);
    return () => window.clearInterval(id);
  }, [game]);

  const actions = useMemo(
    () => ({
      clickTokenJob: () => {
        setGame((prev) => {
          const next = structuredClone(prev) as GameState;
          next.resources.compute += CLICK_COMPUTE * next.resources.computeMultiplier;
          next.resources.cash += CLICK_CASH * next.resources.cashMultiplier;
          next.resources.attention += Math.random() * 0.04;
          next.resources.totalClicks += 1;
          next.resources.totalComputeGenerated += CLICK_COMPUTE;
          next.resources.totalCashEarned += CLICK_CASH;
          if (next.resources.computePerSecond > 0 && prev.resources.computePerSecond === 0) {
            next.notifications.unshift(createNotification('Your first passive income is online.'));
          }
          return next;
        });
      },
      buyUpgrade: (upgradeId: string) => {
        setGame((prev) => {
          const upgrade = upgrades.find((item) => item.id === upgradeId);
          if (!upgrade) return prev;
          const currentLevel = prev.upgradeLevels[upgradeId] ?? 0;
          if (upgrade.maxLevel !== undefined && currentLevel >= upgrade.maxLevel) return prev;
          const cost = getUpgradeCost(upgrade, currentLevel);
          if (prev.resources.cash < cost) return prev;

          const next = structuredClone(prev) as GameState;
          next.resources.cash -= cost;
          next.upgradeLevels[upgradeId] = currentLevel + 1;
          next.resources = applyEffects(next.resources, upgrade.effects, 1);

          if (upgrade.id === 'box-fan') next.notifications.unshift(createNotification('The fan helped emotionally and thermally.'));
          if (upgrade.id === 'build-log-post') next.notifications.unshift(createNotification('The Timeline noticed you.'));
          if (upgrade.id === 'used-gpu') next.notifications.unshift(createNotification('A mysterious GPU listing appears.'));

          return next;
        });
      },
      saveNow: () => saveGame(game),
      resetSave: () => {
        if (window.confirm('Reset save? This cannot be undone.')) {
          resetGameSave();
          setGame(initialState);
        }
      },
      jumpToStage: (stageId: number) => {
        setGame((prev) => {
          if (!prev.unlockedStages.includes(stageId)) {
            const stage = stages.find((s) => s.id === stageId);
            if (!stage) return prev;
            const next = structuredClone(prev) as GameState;
            next.notifications.unshift(createNotification(`Locked: ${stage.name} requires ${stage.id > 1 ? 'more progress.' : 'start.'}`));
            return next;
          }
          return {
            ...prev,
            resources: {
              ...prev.resources,
              currentStage: stageId
            }
          };
        });
      }
    }),
    [game]
  );

  return { game, actions };
};
