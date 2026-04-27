import { Manager } from '../types/game';
import { formatNumber } from '../utils/format';

export const ManagerCards = ({ managers, currentStage }: { managers: Manager[]; currentStage: number }) => (
  <section className="panel managers">
    <h3>Managers</h3>
    <div className="manager-list">
      {managers.filter((m) => m.unlockStage <= currentStage).map((manager) => (
        <article key={manager.id} className="manager-card">
          <h4>{manager.name}</h4>
          <p className="subtitle">{manager.title} • ${formatNumber(manager.cost)}</p>
          <p>{manager.description}</p>
          <p className="flavor">“{manager.quote}”</p>
        </article>
      ))}
    </div>
  </section>
);
