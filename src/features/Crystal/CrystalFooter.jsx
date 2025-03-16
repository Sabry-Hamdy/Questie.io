import { useSelector } from 'react-redux';

export default function CrystalFooter() {
  const { crystalsCollected, totalFocus } = useSelector(
    (state) => state.crystal,
  );

  return (
    <div className="rounded-lg bg-background-secondary p-4">
      <h2 className="mb-4 text-lg font-semibold text-text-primary">
        Session Stats
      </h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="text-center">
          <div className="text-2xl font-bold text-brand-primary">
            {crystalsCollected}
          </div>
          <div className="text-sm text-text-secondary">Crystals Collected</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-accent-purple">
            {totalFocus}
          </div>
          <div className="text-sm text-text-secondary">Total Focus Time</div>
        </div>
      </div>
    </div>
  );
}
