import React from "react";
import { Trophy, Star, TrendingUp, Award, Calendar, Target } from "lucide-react";

export default function Journey() {
  const achievements = [
    { id: 1, name: "Early Bird", description: "Complete 5 quests before noon", icon: <Star className="w-6 h-6" />, progress: 80 },
    { id: 2, name: "Focus Master", description: "Complete 10 Pomodoro sessions", icon: <Target className="w-6 h-6" />, progress: 60 },
    { id: 3, name: "Scroll Keeper", description: "Create 20 scrolls", icon: <Award className="w-6 h-6" />, progress: 45 },
  ];

  const stats = {
    questsCompleted: 47,
    scrollsWritten: 15,
    focusHours: 28,
    currentStreak: 5,
  };

  return (
    <div className="py-6">
      <header className="mb-6">
        <h1 className="text-2xl font-bold text-brand-primary">Adventure Chronicle</h1>
        <p className="text-text-secondary">Your heroic journey of productivity</p>
      </header>

      <div className="bg-background-secondary rounded-lg p-6 mb-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 bg-brand-primary rounded-full flex items-center justify-center">
            <Trophy className="w-8 h-8 text-text-primary" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-text-primary">Level 5 Hero</h2>
            <p className="text-text-secondary">Productivity Adventurer</p>
          </div>
        </div>

        <div className="h-2 bg-background-tertiary rounded-full mb-2">
          <div className="h-full bg-brand-primary rounded-full" style={{ width: "60%" }} />
        </div>
        <p className="text-sm text-text-secondary">3,240 / 5,000 XP to next level</p>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-background-secondary rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="w-5 h-5 text-accent-green" />
            <span className="text-sm text-text-secondary">Current Streak</span>
          </div>
          <p className="text-2xl font-bold">{stats.currentStreak} days</p>
        </div>
        <div className="bg-background-secondary rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <Calendar className="w-5 h-5 text-accent-purple" />
            <span className="text-sm text-text-secondary">Focus Time</span>
          </div>
          <p className="text-2xl font-bold">{stats.focusHours}h</p>
        </div>
      </div>

      <section className="mb-6">
        <h2 className="text-lg font-semibold text-text-primary mb-4">Active Achievements</h2>
        <div className="space-y-4">
          {achievements.map((achievement) => (
            <div key={achievement.id} className="bg-background-secondary rounded-lg p-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="text-brand-primary">{achievement.icon}</div>
                <div>
                  <h3 className="font-semibold text-text-primary">{achievement.name}</h3>
                  <p className="text-sm text-text-secondary">{achievement.description}</p>
                </div>
              </div>
              <div className="h-2 bg-background-tertiary rounded-full">
                <div className="h-full bg-brand-primary rounded-full transition-all duration-300" style={{ width: `${achievement.progress}%` }} />
              </div>
              <p className="text-right text-xs text-text-secondary mt-1">{achievement.progress}%</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-text-primary mb-4">Monthly Overview</h2>
        <div className="bg-background-secondary rounded-lg p-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-text-secondary mb-1">Quests Completed</p>
              <p className="text-2xl font-bold text-text-primary">{stats.questsCompleted}</p>
            </div>
            <div>
              <p className="text-sm text-text-secondary mb-1">Scrolls Written</p>
              <p className="text-2xl font-bold text-text-primary">{stats.scrollsWritten}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
