import { Manager } from '../types/game';

export const managers: Manager[] = [
  {
    id: 'ops-goblin',
    name: 'Ops Goblin',
    title: 'Duct Tape Genius',
    description: 'Keeps the rigs alive through sheer willpower.',
    quote: "If it sparks, it means it's working… mostly.",
    cost: 400,
    unlockStage: 1,
    effects: { hardwareBuildCost: -0.1, uptime: 0.05 },
    automationType: 'repair',
    flavor: 'Carries three screwdrivers and one banana.'
  },
  {
    id: 'timeline-hamster',
    name: 'Timeline Hamster',
    title: 'Hype Engine',
    description: 'Runs endlessly on narrative momentum.',
    quote: 'Narratives compound. As do spreadsheets.',
    cost: 1200,
    unlockStage: 2,
    effects: { hypeGeneration: 0.15, trendCash: 0.05 },
    automationType: 'autopost',
    flavor: 'Never sleeps, only threads.'
  },
  { id: 'cable-wizard', name: 'Cable Wizard', title: 'Tidy Paths', description: 'Cable Zen specialist.', quote: 'Slow cables, fast you.', cost: 5000, unlockStage: 7, effects: { airflow: 0.05 }, flavor: 'Labels everything.' },
  { id: 'on-call-ferret', name: 'On-Call Ferret', title: 'Night Mode', description: 'Alert response specialist.', quote: 'Sleep is optional. Alerts are not.', cost: 9000, unlockStage: 8, effects: { responseSpeed: 0.05 }, flavor: 'Caffeine-fueled.' },
  { id: 'facility-otter', name: 'Facility Otter', title: 'Preventive Otter', description: 'Loves redundancy.', quote: 'Redundancy is invisible until it isn’t.', cost: 25000, unlockStage: 13, effects: { outageRisk: -0.1 }, flavor: 'Carries a checklist.' },
  { id: 'benchmark-crow', name: 'Benchmark Crow', title: 'Benchmark Brutality', description: 'Finds the truth in charts.', quote: 'Numbers don’t lie. You do—sometimes.', cost: 30000, unlockStage: 13, effects: { benchmark: 0.08 }, flavor: 'Roasts bad graphs.' },
  { id: 'safety-capybara', name: 'Safety Capybara', title: 'Boring Is Good', description: 'Calm incident preventer.', quote: 'We plan for worst case so future us can chill.', cost: 60000, unlockStage: 19, effects: { uptime: 0.2, oopsEvents: -0.3 }, flavor: 'Unbothered and prepared.' },
  { id: 'narrative-fox', name: 'Narrative Fox', title: 'Hype Cycle', description: 'Turns updates into legend.', quote: 'We turn spreadsheets into legends.', cost: 65000, unlockStage: 19, effects: { influence: 0.15, wonder: 0.1 }, flavor: 'Master storyteller.' }
];
