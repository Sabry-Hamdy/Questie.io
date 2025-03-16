import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  quests: [
    // {
    //   id: 2,
    //   title: 'Slay the Email Dragon',
    //   description: 'Tame the endless flood of emails in your inbox.',
    //   difficulty: 'intermediate',
    //   dueDate: '2024-03-05',
    //   completed: false,
    //   subquests: [
    //     {
    //       id: '21',
    //       title: 'Unsubscribe from spam newsletters',
    //       completed: false,
    //     },
    //     { id: '22', title: 'Respond to urgent emails', completed: true },
    //     { id: '23', title: 'Organize inbox folders', completed: false },
    //   ],
    // },
    // {
    //   id: 3,
    //   title: 'Meeting with the Council (Management)',
    //   description: 'Prepare for and survive the weekly management meeting.',
    //   difficulty: 'expert',
    //   dueDate: '2024-03-07',
    //   completed: false,
    //   subquests: [
    //     { id: '31', title: 'Prepare presentation slides', completed: true },
    //     { id: '32', title: 'Rehearse talking points', completed: false },
    //     { id: '33', title: 'Bring coffee for morale boost', completed: false },
    //   ],
    // },
    // {
    //   id: 4,
    //   title: 'Conquer the Laundry Mountain',
    //   description: 'Defeat the towering pile of clothes threatening your room.',
    //   difficulty: 'novice',
    //   dueDate: '2024-03-03',
    //   completed: false,
    //   subquests: [
    //     { id: '41', title: 'Sort clothes by color', completed: true },
    //     { id: '42', title: 'Wash and dry all loads', completed: false },
    //     { id: '43', title: 'Fold and put away clothes', completed: false },
    //   ],
    // },
    // {
    //   id: 5,
    //   title: 'Navigate the Grocery Labyrinth',
    //   description:
    //     'Venture into the supermarket and return with all items on your list.',
    //   difficulty: 'intermediate',
    //   dueDate: '2024-03-04',
    //   completed: false,
    //   subquests: [
    //     { id: '51', title: 'Make a shopping list', completed: true },
    //     { id: '52', title: 'Find the best deals', completed: false },
    //     { id: '53', title: 'Avoid impulse buys', completed: false },
    //   ],
    // },
    // {
    //   id: 6,
    //   title: 'Defeat the Procrastination Beast',
    //   description: 'Overcome the urge to delay important tasks.',
    //   difficulty: 'expert',
    //   dueDate: '2024-03-10',
    //   completed: false,
    //   subquests: [
    //     { id: '61', title: 'Set a timer for focused work', completed: false },
    //     { id: '62', title: 'Break tasks into smaller steps', completed: true },
    //     {
    //       id: '63',
    //       title: 'Reward yourself after completion',
    //       completed: false,
    //     },
    //   ],
    // },
    // {
    //   id: 7,
    //   title: 'Survive the Monday Gauntlet',
    //   description:
    //     'Make it through the first day of the workweek with your sanity intact.',
    //   difficulty: 'intermediate',
    //   dueDate: '2024-03-11',
    //   completed: false,
    //   subquests: [
    //     { id: '71', title: 'Prepare coffee and breakfast', completed: false },
    //     { id: '72', title: "Review the week's schedule", completed: true },
    //     { id: '73', title: 'Avoid office small talk', completed: false },
    //   ],
    // },
    // {
    //   id: 8,
    //   title: 'Complete the Tax Quest',
    //   description:
    //     'Gather all documents and file your taxes before the deadline.',
    //   difficulty: 'expert',
    //   dueDate: '2024-04-15',
    //   completed: false,
    //   subquests: [
    //     { id: '81', title: 'Collect W-2s and receipts', completed: false },
    //     { id: '82', title: 'Fill out tax forms', completed: false },
    //     { id: '83', title: 'Submit and hope for a refund', completed: false },
    //   ],
    // },
  ],

  // quest: {
  //   id: number,
  //   title: string,
  //   description: string,
  //   difficulty: string,
  //   dueDate: string,
  //   completed: boolean,
  //   subquests: [
  //     {
  //       id: string,
  //       title: string,
  //       description: string,
  //       completed: boolean
  //     }
  //   ]
  // },
};

export const questsSlice = createSlice({
  name: 'quests',
  initialState,
  reducers: {
    addQuest: (state, action) => {
      // payload = new quest
      state.quests.push(action.payload);
    },

    editQuest: (state, action) => {
      // payload = quest id, new quest
      state.quests = state.quests.map((quest) =>
        Number(quest.id) === Number(action.payload.questId)
          ? action.payload.newQuest
          : quest,
      );
    },

    deleteQuest: (state, action) => {
      // payload = questId
      state.quests = state.quests.filter(
        (quest) => Number(quest.id) !== Number(action.payload),
      );
    },
    addSubquest: (state, action) => {
      // payload = { questId, subquest }
      const quest = state.quests.find(
        (quest) => Number(quest.id) === Number(action.payload.questId),
      );
      if (quest) {
        if (!quest.subquests) quest.subquests = [];
        quest.subquests.push(action.payload.subquest);
      }
    },

    toggleQuestCompletion: (state, action) => {
      // payload = questId
      const quest = state.quests.find(
        (quest) => Number(quest.id) === Number(action.payload),
      );

      if (quest) {
        quest.completed = !quest.completed;
      }

      if (quest.completed && quest.subquests) {
        quest.subquests.forEach((subquest) => {
          subquest.completed = true;
        });
      }
    },

    toggleSubquestCompletion: (state, action) => {
      // payload = { questId, subquestId }
      const quest = state.quests.find(
        (quest) => Number(quest.id) === Number(action.payload.questId),
      );

      let subquest;
      if (quest) {
        subquest = quest.subquests?.find(
          (subquest) => subquest.id === action.payload.subquestId,
        );
      }

      if (subquest) {
        subquest.completed = !subquest.completed;
      }
      if (subquest.completed === false && quest.completed === true) {
        quest.completed = false;
      }
    },

    completeSubquests: (state, action) => {
      // payload = quest id

      const quest = state.quests.find(
        (quest) => Number(quest.id) === Number(action.payload),
      );

      if (quest && quest.subquests) {
        console.log('quest');
        quest.subquests.forEach((subquest) =>
          !subquest.completed ? (subquest.completed = true) : subquest,
        );
      }
    },
  },
});

export const {
  addQuest,
  deleteQuest,
  toggleQuestCompletion,
  toggleSubquestCompletion,
  addSubquest,
  completeSubquests,
  questsFilter,
  editQuest,
} = questsSlice.actions;

export default questsSlice.reducer;
