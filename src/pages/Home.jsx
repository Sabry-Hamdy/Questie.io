import React from 'react';
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

      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="bg-background-secondary rounded-lg p-4 text-center">
          <Trophy className="w-6 h-6 text-brand-primary mx-auto mb-2" />
          <div className="text-2xl font-bold">12</div>
          <div className="text-xs text-text-secondary">Quests Complete</div>
        </div>
        <div className="bg-background-secondary rounded-lg p-4 text-center">
          <Sword className="w-6 h-6 text-accent-purple mx-auto mb-2" />
          <div className="text-2xl font-bold">Level 5</div>
          <div className="text-xs text-text-secondary">Hero Rank</div>
        </div>
        <div className="bg-background-secondary rounded-lg p-4 text-center">
          <Shield className="w-6 h-6 text-accent-blue mx-auto mb-2" />
          <div className="text-2xl font-bold">3</div>
          <div className="text-xs text-text-secondary">Achievements</div>
        </div>
      </div>

      <div className="relative mb-8">
        <div className="absolute inset-0 bg-gradient-to-br from-gradient-amber to-gradient-purple rounded-lg" />
        <img
          src="https://images.unsplash.com/photo-1506466010722-395aa2bef877?auto=format&fit=crop&w=800"
          alt="Fantasy Map"
          className="w-full h-48 object-cover rounded-lg opacity-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-xl font-bold text-text-primary">
            Your Quest Map
          </h2>
        </div>
      </div>

      <section className="mb-8">
        <h2 className="text-lg font-semibold text-text-primary mb-4">
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
    <div className="bg-background-secondary rounded-lg p-4 border border-border-primary">
      <div className="flex items-center gap-2">
        <span
          className={`w-2 h-2 rounded-full ${difficultyColors[difficulty]}`}
        />
        <h3 className="font-semibold text-text-primary">{title}</h3>
      </div>
      <div className="text-text-secondary text-sm mt-1">
        Time remaining: {timeLeft}
      </div>
    </div>
  );
}
