import { Trophy, Sword, Shield } from 'lucide-react';

export default function Home() {
  return (
    <div className="py-6">
      <header className="mb-6">
        <h1 className="text-2xl font-bold text-brand-primary">
          Welcome back, Adventurer!
        </h1>
        <p className="text-text-secondary">Your daily quests await...</p>
      </header>

      <div className="mb-8 grid grid-cols-3 gap-4">
        <div className="rounded-lg bg-background-secondary p-4 text-center">
          <Trophy className="mx-auto mb-2 h-6 w-6 text-brand-primary" />
          <div className="text-2xl font-bold">12</div>
          <div className="text-xs text-text-secondary">Quests Complete</div>
        </div>
        <div className="rounded-lg bg-background-secondary p-4 text-center">
          <Sword className="mx-auto mb-2 h-6 w-6 text-accent-purple" />
          <div className="text-2xl font-bold">Level 5</div>
          <div className="text-xs text-text-secondary">Hero Rank</div>
        </div>
        <div className="rounded-lg bg-background-secondary p-4 text-center">
          <Shield className="mx-auto mb-2 h-6 w-6 text-accent-blue" />
          <div className="text-2xl font-bold">3</div>
          <div className="text-xs text-text-secondary">Achievements</div>
        </div>
      </div>

      <div className="relative mb-8">
        <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-gradient-amber to-gradient-purple" />
        <img
          src="https://images.unsplash.com/photo-1506466010722-395aa2bef877?auto=format&fit=crop&w=800"
          alt="Fantasy Map"
          className="h-48 w-full rounded-lg object-cover opacity-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-xl font-bold text-text-primary">
            Your Quest Map
          </h2>
        </div>
      </div>

      <section className="mb-8">
        <h2 className="mb-4 text-lg font-semibold text-text-primary">
          Today&apos;s Priority Quests
        </h2>
        <div className="space-y-3">
          <QuestPreview
            title="Slay the Email Dragon"
            difficulty="expert"
            timeLeft="2 hours"
          />
          <QuestPreview
            title="Meeting with the Council"
            difficulty="legendary"
            timeLeft="30 minutes"
          />
        </div>
      </section>
    </div>
  );
}

function QuestPreview({ title, difficulty, timeLeft }) {
  const difficultyColors = {
    novice: 'bg-difficulty-novice',
    apprentice: 'bg-difficulty-apprentice',
    expert: 'bg-difficulty-expert',
    legendary: 'bg-difficulty-legendary',
  };

  return (
    <div className="rounded-lg border border-border-primary bg-background-secondary p-4">
      <div className="flex items-center gap-2">
        <span
          className={`h-2 w-2 rounded-full ${difficultyColors[difficulty]}`}
        />
        <h3 className="font-semibold text-text-primary">{title}</h3>
      </div>
      <div className="mt-1 text-sm text-text-secondary">
        Time remaining: {timeLeft}
      </div>
    </div>
  );
}
