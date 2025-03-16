import { useState } from 'react';
import { BookOpen, Save, Share2 } from 'lucide-react';

export default function Summarize() {
  const [inputText, setInputText] = useState('');
  const [summary, setSummary] = useState('');

  const handleSummarize = () => {
    // Mock summarization logic
    const mockSummary = inputText.split('.')[0] + '...';
    setSummary(mockSummary);
  };

  return (
    <div className="py-6">
      <header className="mb-6">
        <h1 className="text-2xl font-bold text-brand-primary">Wisdom Codex</h1>
        <p className="text-text-secondary">
          Transform lengthy texts into magical revelations
        </p>
      </header>

      <div className="space-y-6">
        <div className="rounded-lg bg-background-secondary p-4">
          <label className="mb-2 block text-sm font-medium text-text-secondary">
            Ancient Text
          </label>
          <textarea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            className="h-40 w-full resize-none rounded-lg border border-border-primary bg-background-primary p-3 text-text-primary placeholder-text-tertiary focus:border-brand-primary focus:outline-none"
            placeholder="Paste your text here to reveal its essence..."
          />
        </div>

        <button
          onClick={handleSummarize}
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-brand-primary px-4 py-2 text-text-primary hover:bg-brand-dark"
        >
          <BookOpen className="h-5 w-5" />
          <span>Reveal Wisdom</span>
        </button>

        {summary && (
          <div className="rounded-lg bg-background-secondary p-4">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-text-primary">
                Magical Revelation
              </h2>
              <div className="flex gap-2">
                <button className="p-2 text-text-secondary hover:text-brand-primary">
                  <Save className="h-5 w-5" />
                </button>
                <button className="p-2 text-text-secondary hover:text-brand-primary">
                  <Share2 className="h-5 w-5" />
                </button>
              </div>
            </div>
            <p className="text-text-secondary">{summary}</p>
          </div>
        )}
      </div>
    </div>
  );
}
