import { configureStore } from '@reduxjs/toolkit';
import scrollsReducer from './features/Scrolls/scrollsSlice';
import questsReducer from './features/Quests/questsSlice';
import crystalReducer from './features/Crystal/crystalSlice';

const store = configureStore({
  reducer: {
    scrolls: scrollsReducer,
    quests: questsReducer,
    crystal: crystalReducer,
  },
});

export default store;
