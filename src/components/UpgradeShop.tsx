import { Upgrade } from '../types/game';
import { getUpgradeCost } from '../systems/upgrades';
import { UpgradeCard } from './UpgradeCard';

interface UpgradeShopProps {
  upgrades: Upgrade[];
  cash: number;
  levels: Record<string, number>;
  onBuy: (id: string) => void;
}

export const UpgradeShop = ({ upgrades, cash, levels, onBuy }: UpgradeShopProps) => (
  <section className="panel shop">
    <h3>Upgrade Shop</h3>
    <div className="shop-list">
      {upgrades.map((upgrade) => {
        const level = levels[upgrade.id] ?? 0;
        const cost = getUpgradeCost(upgrade, level);
        return (
          <UpgradeCard
            key={upgrade.id}
            upgrade={upgrade}
            level={level}
            cost={cost}
            canAfford={cash >= cost}
            onBuy={onBuy}
          />
        );
      })}
    </div>
  </section>
);
