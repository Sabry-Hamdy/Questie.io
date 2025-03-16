import { useRef, memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Clock, MoreVertical, Pencil, Plus, Star, Trash } from 'lucide-react';

import Menu from '../../components/Menu';
import CheckComplete from './CheckComplete';
import Modal from '../../components/Modal';

export default memo(function QuestCard({ quest }) {
  const navigate = useNavigate();

  const difficultyColors = {
    novice: 'bg-difficulty-novice',
    apprentice: 'bg-difficulty-apprentice',
    expert: 'bg-difficulty-expert',
    legendary: 'bg-difficulty-legendary',
  };

  const ref = useRef(null);
  const handleQuestClick = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      navigate(`/quests/${quest.id}`);
    }
  };

  const handleEdit = () => {
    navigate(`/quests/edit/${quest.id}`);
  };

  return (
    <div
      onClick={handleQuestClick}
      className={`mb-3 mr-3 cursor-pointer rounded-lg border border-border-primary p-4 transition-colors hover:border-border-hover ${
        quest.completed ? 'bg-completed-quest' : 'bg-background-secondary'
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <span
              className={`h-2 w-2 rounded-full ${difficultyColors[quest.difficulty]}`}
            />
            <h3
              className={`font-semibold text-text-primary ${
                quest.completed ? 'line-through' : ''
              }`}
            >
              {quest.title.length > 25
                ? quest.title.slice(0, 25) + '...'
                : quest.title}
            </h3>
          </div>
          <p className="mt-1 text-sm text-text-secondary">
            {quest.description.length > 35
              ? quest.description.slice(0, 35) + '...'
              : quest.description}
          </p>

          {quest.dueDate && (
            <div className="mt-2 flex items-center gap-1 text-xs text-text-tertiary">
              <Clock className="h-3 w-3" />
              <span>{new Date(quest.dueDate).toLocaleDateString()}</span>
            </div>
          )}
        </div>

        <div className="absolute right-6 top-4">
          <Menu.Toggle id={quest.id} icon={MoreVertical} />

          <Menu.List id={quest.id}>
            <Menu.Item onClick={handleEdit} icon={Pencil}>
              Edit
            </Menu.Item>

            <Modal.Open opens="quest-delete" itemId={quest.id}>
              <Menu.Item danger icon={Trash}>
                Delete
              </Menu.Item>
            </Modal.Open>
          </Menu.List>
        </div>
      </div>

      {quest?.subquests?.length > 0 && (
        <div className="mt-3 border-t border-border-primary pt-3">
          <div className="flex items-center gap-2 text-xs text-text-secondary">
            <Star className="h-3 w-3" />
            <span>{quest.subquests.length} sub-quests</span>
          </div>
        </div>
      )}

      <CheckComplete reference={ref} quest={quest} />
    </div>
  );
});
