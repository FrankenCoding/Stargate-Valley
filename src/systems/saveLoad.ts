import { GameState } from '../types/game';

const SAVE_KEY = 'localmaxxing-save';
export const SAVE_VERSION = 1;

export const saveGame = (state: GameState): void => {
  const payload: GameState = {
    ...state,
    version: SAVE_VERSION,
    resources: {
      ...state.resources,
      lastSavedAt: Date.now()
    }
  };
  localStorage.setItem(SAVE_KEY, JSON.stringify(payload));
};

export const loadGame = (): GameState | null => {
  const raw = localStorage.getItem(SAVE_KEY);
  if (!raw) return null;
  try {
    const parsed = JSON.parse(raw) as GameState;
    if (parsed.version !== SAVE_VERSION) {
      // TODO: Add save migration strategy for future versions.
      return null;
    }
    return parsed;
  } catch {
    return null;
  }
};

export const resetGameSave = (): void => {
  localStorage.removeItem(SAVE_KEY);
};
