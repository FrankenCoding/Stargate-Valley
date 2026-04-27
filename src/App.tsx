import './styles.css';
import { HUD } from './components/HUD';
import { StageView } from './components/StageView';
import { BigClickButton } from './components/BigClickButton';
import { UpgradeShop } from './components/UpgradeShop';
import { TimelineFeed } from './components/TimelineFeed';
import { ManagerCards } from './components/ManagerCards';
import { Roadmap } from './components/Roadmap';
import { NotificationLog } from './components/NotificationLog';
import { SaveControls } from './components/SaveControls';
import { useGameStore } from './state/gameStore';
import { stages } from './data/stages';
import { timelinePosts } from './data/timelinePosts';
import { managers } from './data/managers';
import { getAvailableUpgrades } from './systems/upgrades';

function App() {
  const { game, actions } = useGameStore();
  const currentStage = stages.find((stage) => stage.id === game.resources.currentStage) ?? stages[0];

  return (
    <div className="app-shell">
      <HUD resources={game.resources} stageName={currentStage.name} />
      <main className="layout">
        <div className="left-col">
          <StageView stage={currentStage} />
          <BigClickButton onClick={actions.clickTokenJob} disabled={Boolean(game.resources.breakerTrippedUntil && Date.now() < game.resources.breakerTrippedUntil)} />
          <Roadmap
            stages={stages}
            currentStage={game.resources.currentStage}
            unlockedStages={game.unlockedStages}
            onSelect={actions.jumpToStage}
          />
        </div>
        <div className="right-col">
          <UpgradeShop
            upgrades={getAvailableUpgrades(game.resources.currentStage)}
            cash={game.resources.cash}
            levels={game.upgradeLevels}
            onBuy={actions.buyUpgrade}
          />
          <ManagerCards managers={managers} currentStage={game.resources.currentStage} />
        </div>
      </main>
      <section className="lower-grid">
        <TimelineFeed posts={timelinePosts} />
        <NotificationLog notifications={game.notifications} />
        <SaveControls onSave={actions.saveNow} onReset={actions.resetSave} />
      </section>
      <footer className="footer-note">Tiny rigs. Tiny wins. Big numbers later.</footer>
    </div>
  );
}

export default App;
