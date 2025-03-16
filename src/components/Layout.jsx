import { useLocation, Link } from 'react-router-dom';
import { Scroll, CheckSquare, Timer, BookOpen, Map, User } from 'lucide-react';

export default function Layout({ children }) {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div className="flex min-h-screen flex-col bg-background-primary text-text-primary">
      <main className="container mx-auto max-w-screen-lg flex-1 px-4 pb-20">
        {children}
      </main>

      <nav className="fixed bottom-0 w-full border-t border-border-primary bg-background-secondary">
        <div className="container mx-auto max-w-screen-lg px-4">
          <div className="flex items-center justify-between py-2">
            <NavLink
              to="/"
              icon={<Map />}
              label="Quest Hub"
              isActive={isActive('/')}
            />
            <NavLink
              to="/scrolls"
              icon={<Scroll />}
              label="Scrolls"
              isActive={isActive('/scrolls')}
            />
            <NavLink
              to="/quests"
              icon={<CheckSquare />}
              label="Quests"
              isActive={isActive('/quests')}
            />
            <NavLink
              to="/crystal"
              icon={<Timer />}
              label="Crystal"
              isActive={isActive('/crystal')}
            />
            <NavLink
              to="/summarize"
              icon={<BookOpen />}
              label="Codex"
              isActive={isActive('/summarize')}
            />
            <NavLink
              to="/journey"
              icon={<User />}
              label="Journey"
              isActive={isActive('/journey')}
            />
          </div>
        </div>
      </nav>
    </div>
  );
}

function NavLink({ to, icon, label, isActive }) {
  return (
    <Link
      to={to}
      className={`flex flex-col items-center p-1 ${
        isActive
          ? 'text-brand-primary'
          : 'text-text-secondary hover:text-brand-light'
      }`}
    >
      <div className="h-6 w-6">{icon}</div>
      <span className="mt-1 text-xs">{label}</span>
    </Link>
  );
}
