import { useDispatch } from 'react-redux';
import { toggleQuestCompletion } from './questsSlice';
import { toast } from 'react-toastify';
import { useCallback } from 'react';

export default function CheckComplete({ reference, quest }) {
  const dispatch = useDispatch();

  const handleQuestToggle = useCallback(
    function handleQuestToggle(e) {
      e.stopPropagation();

      dispatch(toggleQuestCompletion(quest.id));

      toast.success(`Congratulations, brave adventurer! Quest is complete!`);
    },
    [dispatch, quest.id],
  );

  return (
    <div ref={reference} className="mt-3 flex items-center gap-2">
      <input
        id={`complete-quest-${quest.id}`}
        type="checkbox"
        checked={quest.completed}
        onChange={handleQuestToggle}
        className="h-4 w-4 cursor-pointer rounded text-brand-primary focus:ring-brand-primary"
      />
      <label htmlFor={`complete-quest-${quest.id}`}>Completed</label>
    </div>
  );
}
