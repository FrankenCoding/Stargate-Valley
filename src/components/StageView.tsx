import { Stage } from '../types/game';

export const StageView = ({ stage }: { stage: Stage }) => (
  <section className="panel stage-view" style={{ borderColor: stage.colorTheme }}>
    <div className="stage-badge">{stage.artLabel}</div>
    <h2>{stage.name}</h2>
    <p className="subtitle">{stage.subtitle}</p>
    <p>{stage.description}</p>
    <div className="sticky-grid">
      <span>run more tokens</span>
      <span>airflow is self care</span>
      <span>alignment probably fine</span>
      <span>uptime &gt; ego</span>
    </div>
  </section>
);
