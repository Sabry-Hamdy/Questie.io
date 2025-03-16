import Quests from '../features/Quests/Quests'; // Updated path
import NewQuestButton from '../features/Quests/NewQuestButton';
import QuestFilter from '../features/Quests/QuestFilter';
import Modal from '../components/Modal';
import ConfirmDelete from '../components/ConfirmDelete';
import FeatureHeader from '../components/FeatureHeader';

import { deleteQuest } from '../features/Quests/questsSlice';
import FeatureContainer from '../components/FeatureContainer';

export default function QuestsPage() {
  return (
    <FeatureContainer>
      <Modal>
        <FeatureHeader
          headText="Quest Log"
          bodyText="Your active missions and challenges"
        />

        <div className="mb-6 flex gap-4">
          <NewQuestButton />

          <QuestFilter onClick={() => console.log('Filter clicked')} />
        </div>

        <Quests />

        <Modal.Window name="quest-delete">
          <ConfirmDelete
            action={deleteQuest}
            message="Are you sure you want to delete this quest?"
          />
        </Modal.Window>
      </Modal>
    </FeatureContainer>
  );
}
