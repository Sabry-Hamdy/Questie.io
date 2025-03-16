import { useDispatch, useSelector } from 'react-redux';

import { formatTime } from '../../utils/helpers';
import { decrementTime } from './crystalSlice';
import { useDecrementSeconds } from '../../hooks/useDecrementSeconds';

function Crystal() {
  const { workTime, restTime, timeLeft, status, sessionLabel, sessionType } =
    useSelector((state) => state.crystal);
  const dispatch = useDispatch();

  const sessionTypeTime = sessionType === 'work' ? workTime : restTime;
  const progress = ((sessionTypeTime - timeLeft) / sessionTypeTime) * 100;

  useDecrementSeconds(status, timeLeft, () => dispatch(decrementTime()));

  return (
    <div className="relative mx-auto mb-8 h-64 w-64">
      <svg className="h-full w-full -rotate-90 transform">
        <circle
          cx="32"
          cy="32"
          r="30"
          fill="none"
          stroke="#1e293b"
          strokeWidth="4"
          className="h-full w-full"
          style={{ transform: 'scale(4)' }}
        />
        <circle
          cx="32"
          cy="32"
          r="30"
          fill="none"
          stroke={sessionType === 'work' ? '#f59e0b' : '#3b82f6'}
          strokeWidth="4"
          strokeDasharray={`${2 * Math.PI * 30}`}
          strokeDashoffset={`${2 * Math.PI * 30 * (1 - progress / 100)}`}
          className="h-full w-full"
          style={{
            transform: 'scale(4)',
            transition: 'stroke-dashoffset 0.5s',
          }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="mb-2 text-4xl font-bold text-text-primary">
          {formatTime(timeLeft)}
        </div>
        <div className="text-text-secondary">
          {sessionLabel === 'quest' ? 'Quest Time' : 'Rest Period'}
        </div>
      </div>
    </div>
  );
}

export default Crystal;
