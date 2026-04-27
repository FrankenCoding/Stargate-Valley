import { stages } from '../data/stages';
import { ResourceState, Stage } from '../types/game';

export const isStageUnlocked = (stage: Stage, resources: ResourceState): boolean => {
  const req = stage.unlockRequirements;
  if (req.cash !== undefined && resources.cash < req.cash) return false;
  if (req.computePerSecond !== undefined && resources.computePerSecond < req.computePerSecond) return false;
  if (req.maxHeat !== undefined && resources.heat > req.maxHeat) return false;
  if (req.attention !== undefined && resources.attention < req.attention) return false;
  if (req.powerLimit !== undefined && resources.powerLimit < req.powerLimit) return false;
  return true;
};

export const getNextUnlockableStage = (resources: ResourceState, unlockedStages: number[]): Stage | undefined =>
  stages.find((stage) => !unlockedStages.includes(stage.id) && isStageUnlocked(stage, resources));

export const requirementText = (stage: Stage): string => {
  const req = stage.unlockRequirements;
  const chunks: string[] = [];
  if (req.cash !== undefined) chunks.push(`$${req.cash}`);
  if (req.computePerSecond !== undefined) chunks.push(`${req.computePerSecond} compute/s`);
  if (req.maxHeat !== undefined) chunks.push(`Heat ≤ ${req.maxHeat}`);
  if (req.attention !== undefined) chunks.push(`Attention ≥ ${req.attention}`);
  if (req.powerLimit !== undefined) chunks.push(`Power limit ≥ ${req.powerLimit}`);
  return chunks.length > 0 ? chunks.join(' • ') : 'Default starting stage';
};
