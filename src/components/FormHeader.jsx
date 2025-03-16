export default function FormHeader({ headText, paragraphText }) {
  return (
    <header className="mb-6">
      <h1 className="text-2xl font-bold text-brand-primary">{headText}</h1>
      <p className="text-text-secondary">{paragraphText}</p>
    </header>
  );
}
