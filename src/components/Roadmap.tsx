import { Stage } from '../types/game';
import { requirementText } from '../systems/stages';

interface RoadmapProps {
  stages: Stage[];
  currentStage: number;
  unlockedStages: number[];
  onSelect: (id: number) => void;
}

export const Roadmap = ({ stages, currentStage, unlockedStages, onSelect }: RoadmapProps) => (
  <section className="panel roadmap">
    <h3>Roadmap (Stages 1–6)</h3>
    <div className="road-list">
      {stages.map((stage) => {
        const unlocked = unlockedStages.includes(stage.id);
        const status = stage.id === currentStage ? 'current' : unlocked ? 'unlocked' : 'locked';
        return (
          <button key={stage.id} className={`road-item ${status}`} onClick={() => onSelect(stage.id)}>
            <strong>{stage.id}. {stage.name}</strong>
            <small>{requirementText(stage)}</small>
          </button>
        );
      })}
    </div>
  </section>
);
