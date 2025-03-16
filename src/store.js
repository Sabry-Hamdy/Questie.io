import { configureStore } from '@reduxjs/toolkit';
import scrollsReducer from './features/Scrolls/scrollsSlice';
import questsReducer from './features/Quests/questsSlice';
import crystalReducer from './features/Crystal/crystalSlice';
import { localStorageMiddleware } from './middleware/localStorageMiddleware';

const loadFromStorage = () => {
  try {
    const savedScrolls = localStorage.getItem('scrolls');
    const savedQuests = localStorage.getItem('quests');
    const savedCrystal = localStorage.getItem('crystal');
    return {
      scrolls: {
        scrolls: savedScrolls ? JSON.parse(savedScrolls) : [],
      },
      quests: {
        quests: savedQuests ? JSON.parse(savedQuests) : [],
      },
      crystal: savedCrystal
        ? JSON.parse(savedCrystal)
        : {
            workTime: 25 * 60,
            restTime: 5 * 60,
            timeLeft: 25 * 60,
            sessionType: 'work', // 'work' | 'rest'
            status: 'idle', // 'idle' | 'active' | 'paused' | 'completed'
            sessionLabel: 'quest',
            crystalsCollected: 0,
            totalFocus: 0,
          },
    };
  } catch {
    return undefined;
  }
};

const store = configureStore({
  reducer: {
    scrolls: scrollsReducer,
    quests: questsReducer,
    crystal: crystalReducer,
  },
  preloadedState: loadFromStorage(),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
});

export default store;
