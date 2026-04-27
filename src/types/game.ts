export type UpgradeCategory =
  | 'hardware'
  | 'cooling'
  | 'power'
  | 'software'
  | 'hype'
  | 'infrastructure'
  | 'optimization';

export interface UpgradeEffects {
  computePerSecond?: number;
  powerUsed?: number;
  powerLimit?: number;
  heatGeneration?: number;
  heatGenerationPercent?: number;
  coolingPower?: number;
  cashMultiplier?: number;
  computeMultiplier?: number;
  hype?: number;
  hypePerSecond?: number;
  attention?: number;
  reliability?: number;
  safety?: number;
  automation?: number;
}

export interface Upgrade {
  id: string;
  name: string;
  description: string;
  category: UpgradeCategory;
  baseCost: number;
  costMultiplier: number;
  maxLevel?: number;
  unlockStage: number;
  effects: UpgradeEffects;
  flavorText: string;
}

export interface StageRequirements {
  cash?: number;
  computePerSecond?: number;
  maxHeat?: number;
  attention?: number;
  powerLimit?: number;
}

export interface Stage {
  id: number;
  name: string;
  subtitle: string;
  description: string;
  unlockRequirements: StageRequirements;
  artLabel: string;
  colorTheme?: string;
  unlockedText: string;
}

export interface Manager {
  id: string;
  name: string;
  title: string;
  quote: string;
  description: string;
  cost: number;
  unlockStage: number;
  effects: Record<string, number>;
  automationType?: string;
  flavor: string;
}

export interface TimelinePost {
  id: string;
  author: string;
  message: string;
}

export interface Notification {
  id: string;
  message: string;
  createdAt: number;
}

export interface ResourceState {
  cash: number;
  compute: number;
  computePerSecond: number;
  powerUsed: number;
  powerLimit: number;
  heat: number;
  heatGeneration: number;
  heatGenerationMultiplier: number;
  coolingPower: number;
  attention: number;
  hype: number;
  hypePerSecond: number;
  reliability: number;
  safety: number;
  automation: number;
  cashMultiplier: number;
  computeMultiplier: number;
  currentStage: number;
  breakerTrippedUntil: number | null;
  thermalEmergencyUntil: number | null;
  lastSavedAt?: number;
  totalClicks: number;
  totalComputeGenerated: number;
  totalCashEarned: number;
}

export interface GameState {
  version: number;
  resources: ResourceState;
  upgradeLevels: Record<string, number>;
  unlockedStages: number[];
  notifications: Notification[];
}
