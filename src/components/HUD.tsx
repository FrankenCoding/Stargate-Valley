import { ResourceState } from '../types/game';
import { formatNumber, formatRate } from '../utils/format';

interface HUDProps {
  resources: ResourceState;
  stageName: string;
}

const Meter = ({ label, value, max, color }: { label: string; value: number; max: number; color: string }) => (
  <div className="meter">
    <div className="meter-label"><span>{label}</span><strong>{formatNumber(value)}</strong></div>
    <div className="meter-track"><div className="meter-fill" style={{ width: `${Math.min(100, (value / max) * 100)}%`, background: color }} /></div>
  </div>
);

export const HUD = ({ resources, stageName }: HUDProps) => (
  <section className="panel hud">
    <h1>LocalMaxxing</h1>
    <p className="subtitle">Current Stage: {stageName}</p>
    <div className="hud-grid">
      <div><span>💵 Cash</span><strong>${formatNumber(resources.cash)}</strong></div>
      <div><span>🧮 Compute</span><strong>{formatNumber(resources.compute)}</strong></div>
      <div><span>⚙️ Compute/s</span><strong>{formatRate(resources.computePerSecond * resources.computeMultiplier)}</strong></div>
      <div><span>🔌 Power</span><strong>{formatNumber(resources.powerUsed)} / {formatNumber(resources.powerLimit)}</strong></div>
    </div>
    <Meter label="Heat" value={resources.heat} max={100} color="#ff8f5c" />
    <Meter label="Attention" value={resources.attention} max={100} color="#f472b6" />
    <Meter label="Hype" value={resources.hype} max={200} color="#e879f9" />
  </section>
);
