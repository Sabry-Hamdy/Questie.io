export default function Button({
  disabled,
  onClick,
  children,
  variation,
  type = 'button',
}) {
  const styles = {
    primary:
      ' w-full rounded-lg bg-brand-primary px-4 py-2 text-white transition-all hover:bg-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-dark focus:ring-offset-2 focus:ring-offset-background-primary',
    secondary:
      'flex-1 rounded-lg border border-border-primary px-4 py-2 text-text-primary transition-all hover:bg-background-tertiary focus:outline-none focus:ring-2 focus:ring-border-primary focus:ring-offset-2 focus:ring-offset-background-primary',
    'accent-blue':
      'w-full rounded-md bg-blue-500 disabled:bg-blue-700/80 disabled:cursor-not-allowed px-4 py-2 text-white transition-all hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-background-primary',
    'accent-purple':
      'w-full rounded-lg bg-accent-purple px-4 py-2 text-white transition-all hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-brand-dark focus:ring-offset-2 focus:ring-offset-background-primary',
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${styles[variation]}`}
    >
      {children}
    </button>
  );
}
