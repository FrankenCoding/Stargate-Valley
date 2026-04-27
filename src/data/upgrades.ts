import { Upgrade } from '../types/game';

export const upgrades: Upgrade[] = [
  {
    id: 'used-gpu',
    name: 'Used GPU',
    description: 'A janky workhorse that still pushes tokens.',
    category: 'hardware',
    baseCost: 25,
    costMultiplier: 1.15,
    unlockStage: 1,
    effects: { computePerSecond: 0.5, powerUsed: 60, heatGeneration: 4 },
    flavorText: 'Probably mined something cursed before you bought it.'
  },
  {
    id: 'sketchy-gpu-lot',
    name: 'Sketchy GPU Lot',
    description: 'Bulk purchase from a mysterious listing.',
    category: 'hardware',
    baseCost: 250,
    costMultiplier: 1.18,
    unlockStage: 2,
    effects: { computePerSecond: 4, powerUsed: 300, heatGeneration: 12 },
    flavorText: "The listing said 'enterprise grade.' The box says otherwise."
  },
  {
    id: 'box-fan',
    name: 'Box Fan',
    description: 'Point fan at rig. Hope for thermodynamics.',
    category: 'cooling',
    baseCost: 40,
    costMultiplier: 1.12,
    unlockStage: 1,
    effects: { coolingPower: 5 },
    flavorText: 'Airflow is self care.'
  },
  {
    id: 'dust-filters',
    name: 'Dust Filters',
    description: 'Less lint, less chaos, more uptime.',
    category: 'cooling',
    baseCost: 150,
    costMultiplier: 1.2,
    unlockStage: 3,
    effects: { coolingPower: 8 },
    flavorText: 'Tiny lint. Big consequences.'
  },
  {
    id: 'better-power-strip',
    name: 'Better Power Strip',
    description: 'Adds more plug confidence.',
    category: 'power',
    baseCost: 75,
    costMultiplier: 1.25,
    unlockStage: 1,
    effects: { powerLimit: 250 },
    flavorText: 'Still not electrician-approved. But spiritually improved.'
  },
  {
    id: 'dedicated-circuit',
    name: 'Dedicated Circuit',
    description: 'Power delivery that feels less cursed.',
    category: 'power',
    baseCost: 600,
    costMultiplier: 1.3,
    unlockStage: 3,
    effects: { powerLimit: 1000 },
    flavorText: 'The house stops dimming when you click.'
  },
  {
    id: 'build-log-post',
    name: 'Build Log Post',
    description: 'Post your setup and harvest engagement.',
    category: 'hype',
    baseCost: 50,
    costMultiplier: 1.3,
    unlockStage: 1,
    effects: { cashMultiplier: 0.05, hypePerSecond: 1, attention: 5 },
    flavorText: 'Document the grind. Monetize the delusion.'
  },
  {
    id: 'thermal-paste-ritual',
    name: 'Thermal Paste Ritual',
    description: 'Performance ceremony accepted by goblin tradition.',
    category: 'optimization',
    baseCost: 100,
    costMultiplier: 1.25,
    unlockStage: 1,
    effects: { heatGenerationPercent: -0.03 },
    flavorText: 'Ancient paste. Modern coping.'
  },
  {
    id: 'batch-inference-script',
    name: 'Batch Inference Script',
    description: 'Queue jobs so your setup stays busy.',
    category: 'software',
    baseCost: 200,
    costMultiplier: 1.25,
    unlockStage: 4,
    effects: { computeMultiplier: 0.1 },
    flavorText: 'Click less. Queue more.'
  },
  {
    id: 'tiny-nas',
    name: 'Tiny NAS',
    description: 'Store models, logs, and ambition safely.',
    category: 'infrastructure',
    baseCost: 500,
    costMultiplier: 1.2,
    unlockStage: 5,
    effects: { computeMultiplier: 0.05, reliability: 5 },
    flavorText: 'A place for your models, logs, and questionable datasets.'
  },
  {
    id: 'first-rack',
    name: 'First Rack',
    description: 'An actual rack. This is getting serious.',
    category: 'infrastructure',
    baseCost: 2000,
    costMultiplier: 1,
    maxLevel: 1,
    unlockStage: 6,
    effects: { reliability: 10 },
    flavorText: 'You are basically a data center now. Emotionally.'
  }
];
