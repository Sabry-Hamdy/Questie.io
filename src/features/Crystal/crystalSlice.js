import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  workTime: 25 * 60,
  restTime: 5 * 60,
  timeLeft: 25 * 60,
  sessionType: 'work', // 'work' | 'rest'
  status: 'idle', // 'idle' | 'active' | 'paused' | 'completed'
  sessionLabel: 'quest',
  crystalsCollected: 0,
  totalFocus: 0,
};

const crystalSlice = createSlice({
  name: 'crystal',
  initialState,
  reducers: {
    toggleCrystal: (state) => {
      state.status = state.status === 'active' ? 'paused' : 'active';
    },

    resetCrystal: (state) => {
      state.timeLeft =
        state.sessionType === 'work' ? state.workTime : state.restTime;
      state.status = 'idle';
    },

    decrementTime: (state) => {
      if (state.timeLeft !== 0) {
        state.timeLeft -= 1;
        state.totalFocus =
          state.sessionType === 'work'
            ? state.totalFocus + 1
            : state.totalFocus;
      } else {
        state.status = 'idle';
        state.timeLeft = initialState.timeLeft;
        state.sessionType = state.sessionType === 'work' ? 'rest' : 'work';

        if (state.sessionType === 'work') {
          state.timeLeft = state.workTime;
        } else {
          state.crystalsCollected += 1;
          state.timeLeft = state.restTime;
        }
      }
    },

    switchSessionType: (state) => {
      // payload = sessionType, example "work"
      state.sessionType = state.sessionType === 'work' ? 'rest' : 'work';
      state.timeLeft =
        state.sessionType === 'work' ? state.workTime : state.restTime;
      state.status = 'idle';
    },
    setSessionLabel: (state, action) => {
      // payload = sessionLabel, example "quest"
      state.sessionLabel = action.payload;
    },
  },
});

export const {
  toggleCrystal,
  resetCrystal,
  decrementTime,
  switchSessionType,
  setSessionLabel,
} = crystalSlice.actions;

export default crystalSlice.reducer;
