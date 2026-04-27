import { upgrades } from '../data/upgrades';
import { GameState, Upgrade } from '../types/game';

export const getUpgradeLevel = (state: GameState, upgradeId: string): number =>
  state.upgradeLevels[upgradeId] ?? 0;

export const getUpgradeCost = (upgrade: Upgrade, level: number): number =>
  Math.floor(upgrade.baseCost * Math.pow(upgrade.costMultiplier, level));

export const canBuyUpgrade = (state: GameState, upgrade: Upgrade): boolean => {
  const level = getUpgradeLevel(state, upgrade.id);
  if (upgrade.maxLevel !== undefined && level >= upgrade.maxLevel) return false;
  return state.resources.cash >= getUpgradeCost(upgrade, level);
};

export const getAvailableUpgrades = (stage: number): Upgrade[] =>
  upgrades.filter((upgrade) => upgrade.unlockStage <= stage);
