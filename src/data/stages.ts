import { Stage } from '../types/game';

export const stages: Stage[] = [
  {
    id: 1,
    name: 'Garage Corner',
    subtitle: 'Tiny Start, Big Dreams',
    description: 'One open-air rig, zip ties, and vibes.',
    unlockRequirements: {},
    artLabel: '🧰',
    colorTheme: '#7a5d4d',
    unlockedText: 'You started with a single cursed GPU and a dream.'
  },
  {
    id: 2,
    name: 'Full Garage',
    subtitle: 'More Rigs, More Noise',
    description: 'The whole garage now hums with compute.',
    unlockRequirements: { cash: 250, computePerSecond: 2 },
    artLabel: '🏠',
    colorTheme: '#6a7b66',
    unlockedText: 'Stage unlocked: Full Garage.'
  },
  {
    id: 3,
    name: 'Clean Garage Lab',
    subtitle: 'Airflow Civilization',
    description: 'Proper benches and less mystery heat.',
    unlockRequirements: { cash: 1000, maxHeat: 75 },
    artLabel: '🧪',
    colorTheme: '#527b88',
    unlockedText: 'Stage unlocked: Clean Garage Lab.'
  },
  {
    id: 4,
    name: 'Home Office',
    subtitle: 'Comfy Productive Arc',
    description: 'Comfy chair, cleaner desk, faster loops.',
    unlockRequirements: { cash: 2500, attention: 10 },
    artLabel: '🖥️',
    colorTheme: '#6b668a',
    unlockedText: 'Stage unlocked: Home Office.'
  },
  {
    id: 5,
    name: 'Home Lab',
    subtitle: 'Real Infra Energy',
    description: 'Mini-rack territory with growing uptime dreams.',
    unlockRequirements: { cash: 7500, computePerSecond: 25 },
    artLabel: '📡',
    colorTheme: '#536e6e',
    unlockedText: 'Stage unlocked: Home Lab.'
  },
  {
    id: 6,
    name: 'First Rack',
    subtitle: 'Tiny Data Center Arc',
    description: 'Rack PDUs and actual structure emerge.',
    unlockRequirements: { cash: 25000, powerLimit: 2500 },
    artLabel: '🗄️',
    colorTheme: '#5f5f6b',
    unlockedText: 'Stage unlocked: First Rack.'
  }
];
