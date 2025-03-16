export default function FeatureHeader({ headText, bodyText }) {
  return (
    <header className="mb-6">
      <h1 className="text-2xl font-bold text-brand-primary">{headText}</h1>
      <p className="text-text-secondary">{bodyText}</p>
    </header>
  );
}
