import { applyAttentionDrift, clampHeat, computeCashFromCompute, getThermalThrottle } from './economy';
import { createNotification } from './events';
import { GameState } from '../types/game';

export const runTick = (state: GameState, now: number): GameState => {
  const next = structuredClone(state) as GameState;
  const resources = next.resources;

  if (resources.breakerTrippedUntil && now < resources.breakerTrippedUntil) {
    resources.attention = applyAttentionDrift(resources);
    resources.hype += resources.hypePerSecond;
    return next;
  }

  if (resources.thermalEmergencyUntil && now < resources.thermalEmergencyUntil) {
    resources.attention = Math.min(100, resources.attention + 0.3);
    resources.heat = clampHeat(resources.heat - resources.coolingPower * 0.5);
    return next;
  }

  const thermalThrottle = getThermalThrottle(resources.heat);
  const effectiveCompute = resources.computePerSecond * resources.computeMultiplier * thermalThrottle;

  resources.compute += effectiveCompute;
  resources.totalComputeGenerated += effectiveCompute;

  const cashGain = computeCashFromCompute(effectiveCompute, resources.cashMultiplier);
  resources.cash += cashGain;
  resources.totalCashEarned += cashGain;

  resources.hype += resources.hypePerSecond;
  resources.attention = applyAttentionDrift(resources);

  const generatedHeat = resources.heatGeneration * resources.heatGenerationMultiplier;
  resources.heat = clampHeat(resources.heat + generatedHeat - resources.coolingPower);

  if (resources.heat > 95) {
    resources.thermalEmergencyUntil = now + 5000;
    next.notifications.unshift(createNotification('Thermal emergency. Cooling sprint engaged for 5 seconds.'));
  } else if (resources.heat > 80) {
    next.notifications.unshift(createNotification('Thermal throttle: your rig is now a space heater.'));
  }

  if (resources.powerUsed > resources.powerLimit) {
    resources.breakerTrippedUntil = now + 10000;
    resources.attention += 5;
    next.notifications.unshift(createNotification('Breaker tripped. The garage has entered touch-grass mode.'));
  }

  next.notifications = next.notifications.slice(0, 15);
  return next;
};
