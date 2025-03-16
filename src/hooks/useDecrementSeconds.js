import { useEffect } from 'react';

export function useDecrementSeconds(status, timeLeft, dispatch) {
  useEffect(() => {
    let interval;
    if (status === 'active' && timeLeft >= 0) {
      interval = setInterval(() => {
        dispatch?.();
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [status, timeLeft, dispatch]);
}
