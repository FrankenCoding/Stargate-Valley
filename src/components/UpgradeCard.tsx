import { Upgrade } from '../types/game';
import { formatNumber } from '../utils/format';

interface UpgradeCardProps {
  upgrade: Upgrade;
  level: number;
  cost: number;
  canAfford: boolean;
  onBuy: (id: string) => void;
}

export const UpgradeCard = ({ upgrade, level, cost, canAfford, onBuy }: UpgradeCardProps) => {
  const maxed = upgrade.maxLevel !== undefined && level >= upgrade.maxLevel;
  return (
    <article className="upgrade-card">
      <div className="upgrade-head">
        <h4>{upgrade.name}</h4>
        <span>Lv {level}</span>
      </div>
      <p>{upgrade.description}</p>
      <p className="flavor">“{upgrade.flavorText}”</p>
      <button disabled={!canAfford || maxed} onClick={() => onBuy(upgrade.id)}>
        {maxed ? 'Maxed' : `Buy ($${formatNumber(cost)})`}
      </button>
    </article>
  );
};
