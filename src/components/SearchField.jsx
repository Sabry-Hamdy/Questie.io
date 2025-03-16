import { Search } from 'lucide-react';

export default function SearchField({ searchTerm, setSearchTerm }) {
  return (
    <div className="relative mb-6">
      <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 transform text-text-secondary" />
      <input
        type="text"
        placeholder="Search your scrolls..."
        className="w-full rounded-lg border border-border-primary bg-background-secondary py-2 pl-10 pr-4 text-text-primary placeholder-text-tertiary focus:border-brand-primary focus:outline-none"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
}
