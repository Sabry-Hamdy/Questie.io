import { useDispatch, useSelector } from 'react-redux';

import Button from '../../components/Button';

import { resetCrystal, switchSessionType, toggleCrystal } from './crystalSlice';
import { Pause, Play, RotateCcw } from 'lucide-react';

export default function CrystalButtons() {
  const { status, sessionType } = useSelector((state) => state.crystal);
  const dispatch = useDispatch();

  function handleToggle() {
    dispatch(toggleCrystal());
  }

  function handleReset() {
    dispatch(resetCrystal());
  }

  function handleSwitchSessionType() {
    dispatch(switchSessionType());
  }

  return (
    <div className="mx-auto mb-8 flex max-w-xs justify-center gap-4">
      <button
        onClick={handleToggle}
        className={`${sessionType === 'work' ? 'bg-brand-primary' : 'bg-accent-blue'} rounded-full p-4 text-text-primary transition-colors ${sessionType === 'work' ? 'hover:bg-brand-dark' : 'hover:bg-blue-600'}`}
      >
        {status === 'active' ? (
          <Pause className="h-6 w-6" />
        ) : (
          <Play className="h-6 w-6" />
        )}
      </button>

      <Button
        onClick={handleSwitchSessionType}
        variation={sessionType === 'work' ? 'accent-blue' : 'primary'}
        type="button"
      >
        {sessionType === 'work' ? 'Take a Break' : 'Start Working'}
      </Button>

      <button
        onClick={handleReset}
        className="rounded-full bg-background-tertiary p-4 text-text-primary transition-colors hover:bg-background-secondary"
      >
        <RotateCcw className="h-6 w-6" />
      </button>
    </div>
  );
}
