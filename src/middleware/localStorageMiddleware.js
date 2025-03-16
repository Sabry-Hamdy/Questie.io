// This middleware runs after every action
export const localStorageMiddleware = (store) => (next) => (action) => {
  // First, let the action go through as normal
  const result = next(action);

  // After the state has changed, save the entire state to localStorage
  const state = store.getState();

  // Save to localstorage
  localStorage.setItem('scrolls', JSON.stringify(state.scrolls.scrolls));
  localStorage.setItem('quests', JSON.stringify(state.quests.quests));
  localStorage.setItem('crystal', JSON.stringify(state.crystal));

  return result;
};
