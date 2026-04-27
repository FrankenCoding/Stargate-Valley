export const BigClickButton = ({ onClick, disabled }: { onClick: () => void; disabled: boolean }) => (
  <button className="big-click" onClick={onClick} disabled={disabled}>
    ▶ Run Token Job
    <small>Click for compute + cash</small>
  </button>
);
