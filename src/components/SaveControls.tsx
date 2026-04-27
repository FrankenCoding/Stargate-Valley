export const SaveControls = ({ onSave, onReset }: { onSave: () => void; onReset: () => void }) => (
  <section className="panel save-controls">
    <h3>Save Controls</h3>
    <div className="row">
      <button onClick={onSave}>Save Now</button>
      <button className="danger" onClick={onReset}>Reset Save</button>
    </div>
  </section>
);
