import { ResourceState } from '../types/game';

export const CLICK_COMPUTE = 1;
export const CLICK_CASH = 0.1;

export const getThermalThrottle = (heat: number): number => (heat > 80 ? 0.5 : 1);

export const computeCashFromCompute = (computeGenerated: number, cashMultiplier: number): number =>
  (computeGenerated / 10) * cashMultiplier;

export const clampHeat = (heat: number): number => Math.max(0, Math.min(100, heat));

export const applyAttentionDrift = (resources: ResourceState): number => Math.max(0, resources.attention - 0.05);
