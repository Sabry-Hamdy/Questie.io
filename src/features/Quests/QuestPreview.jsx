import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Pencil, Plus, Trash, MoreVertical } from 'lucide-react';
import { toast } from 'react-toastify';

import Menu from '../../components/Menu';
import ErrorMessage from '../../components/ErrorMessage';
import BackButton from '../../components/BackButton';
import Button from '../../components/Button';
import Modal from '../../components/Modal';
import ConfirmDelete from '../../components/ConfirmDelete';

import {
  completeSubquests,
  deleteQuest,
  toggleQuestCompletion,
  toggleSubquestCompletion,
} from './questsSlice';

export default function QuestPreview() {
  const { questId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const quests = useSelector((state) => state.quests.quests);
  const quest = quests.find((q) => Number(q.id) === Number(questId));

  if (!quest) {
    return <ErrorMessage message="Quest not found" />;
  }

  const isQuestCompleted = quest.completed;
  const isSubquestsCompleted = quest?.subquests?.every(
    (subquest) => subquest.completed,
  );

  const handleQuestToggle = () => {
    dispatch(toggleQuestCompletion(questId));
    toast.success('Congratulations, brave adventurer! Quest is complete!');
    navigate('/quests');
  };

  const handleSubquestToggle = (subquestId) => {
    dispatch(toggleSubquestCompletion({ questId, subquestId }));
  };

  const handleSubquestsComplete = () => {
    dispatch(completeSubquests(questId));
  };

  return (
    <Modal>
      <div className="py-6">
        <BackButton to={'/quests'} />

        <div
          className={`rounded-lg p-6 shadow-lg ${
            quest.completed ? 'bg-completed-quest' : 'bg-background-secondary'
          }`}
        >
          <div className="mb-3 flex items-center justify-between">
            <h1
              className={`text-2xl font-bold ${
                quest.completed
                  ? 'text-brand-primary line-through'
                  : 'text-brand-primary'
              }`}
            >
              {quest.title}
            </h1>
            <Menu>
              <Menu.Toggle id={quest.id} icon={MoreVertical} />

              <Menu.List id={quest.id}>
                <Menu.Item
                  onClick={() => navigate(`/quests/edit/${quest.id}`)}
                  icon={Pencil}
                >
                  Edit
                </Menu.Item>

                <Modal.Open opens="quest-delete" itemId={quest.id}>
                  <Menu.Item danger icon={Trash}>
                    Delete
                  </Menu.Item>
                </Modal.Open>
              </Menu.List>
            </Menu>
          </div>

          <p className="mb-3 text-sm text-text-secondary">
            {quest.description}
          </p>

          <div className="flex flex-col gap-3">
            <div>
              <p className="text-xs text-text-tertiary">
                <strong>Difficulty:</strong>{' '}
                <span
                  className={`text-difficulty-${quest.difficulty.toLowerCase()}`}
                >
                  {quest.difficulty}
                </span>
              </p>
              <p className="text-xs text-text-tertiary">
                <strong>Due Date:</strong> {quest.dueDate.toLocaleString()}
              </p>
            </div>
          </div>

          {quest?.subquests?.length > 0 && (
            <div className="mt-5">
              <h2 className="mb-4 text-lg font-semibold text-brand-light">
                Subquests
              </h2>
              <ul className="list-disc space-y-3 pl-5">
                {quest?.subquests.map((subquest) => (
                  <li
                    key={subquest.id}
                    className="flex items-center text-text-secondary"
                  >
                    <input
                      id={subquest.id}
                      type="checkbox"
                      checked={subquest.completed}
                      onChange={() => handleSubquestToggle(subquest.id)}
                      className="mr-2 h-4 w-4 rounded text-brand-primary focus:ring-brand-primary"
                    />
                    <label htmlFor={subquest.id}>{subquest.title}</label>
                    <span
                      className={
                        subquest.completed
                          ? 'ml-2 text-status-active'
                          : 'ml-2 text-accent-blue'
                      }
                    >
                      {subquest.completed ? ' - Completed' : ' - Pending'}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <button
              disabled={isSubquestsCompleted}
              onClick={handleSubquestsComplete}
              className={`w-full rounded py-2 font-semibold text-white transition-all ${
                isSubquestsCompleted
                  ? 'bg-status-active focus:ring-status-active'
                  : 'bg-status-error focus:ring-status-error'
              } hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 disabled:cursor-not-allowed disabled:bg-green-500/80 disabled:hover:opacity-100`}
            >
              {isSubquestsCompleted
                ? 'Subquests Completed'
                : 'Complete Subquests'}
            </button>
            <Button
              onClick={handleQuestToggle}
              disabled={!isSubquestsCompleted || isQuestCompleted}
              type="button"
              variation={'accent-blue'}
            >
              Confirm Complete
            </Button>
          </div>
        </div>
      </div>

      <Modal.Window name="quest-delete">
        <ConfirmDelete
          message="Are you sure you want to delete this quest?"
          action={deleteQuest}
        />
      </Modal.Window>
    </Modal>
  );
}
