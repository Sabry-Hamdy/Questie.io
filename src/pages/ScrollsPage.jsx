import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { BookOpen, Plus } from 'lucide-react';

import SearchField from '../components/SearchField';
import Scrolls from '../features/Scrolls/Scrolls';
import Modal from '../components/Modal';
import ConfirmDelete from '../components/ConfirmDelete';
import FeatureHeader from '../components/FeatureHeader';

import { deleteScroll } from '../features/Scrolls/scrollsSlice';
import FeatureContainer from '../components/FeatureContainer';

export default function ScrollsPage() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const scrolls = useSelector((state) => state.scrolls.scrolls) || [];

  const searchScrolls =
    searchTerm !== ''
      ? scrolls.filter(
          (scroll) =>
            scroll.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            scroll.content.toLowerCase().includes(searchTerm.toLowerCase()),
        )
      : scrolls;

  return (
    <FeatureContainer>
      <Modal>
        <FeatureHeader
          headText={'Scroll Library'}
          bodyText={'Your collected wisdom and knowledge'}
        />

        <SearchField searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        <div className="mb-6 grid grid-cols-2 gap-4">
          <button className="rounded-lg bg-background-secondary p-4 text-center transition-colors hover:bg-background-tertiary">
            <BookOpen className="mx-auto mb-2 h-6 w-6 text-brand-primary" />
            <span className="text-sm">Magic Tomes</span>
          </button>
          <button
            onClick={() => navigate('/scrolls/new')}
            className="rounded-lg bg-background-secondary p-4 text-center transition-colors hover:bg-background-tertiary"
          >
            <Plus className="mx-auto mb-2 h-6 w-6 text-accent-purple" />
            <span className="text-sm">New Scroll</span>
          </button>
        </div>

        <Scrolls scrolls={searchScrolls} />

        <Modal.Window name="scroll-delete">
          <ConfirmDelete
            action={deleteScroll}
            message="Are you sure you want to delete this scroll?"
          />
        </Modal.Window>
      </Modal>
    </FeatureContainer>
  );
}
