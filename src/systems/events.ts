import { Notification } from '../types/game';

export const createNotification = (message: string): Notification => ({
  id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
  message,
  createdAt: Date.now()
});
