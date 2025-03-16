import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  notes: [
    {
      id: 5,
      title: 'The Elixir of Life (Coffee)',
      tome: 'Health Scrolls',
      content:
        'A single cup of this magical brew can turn a groggy mortal into a productivity wizard. Use wisely, for too much may lead to jittery doom.',
      createdAt: '2024-02-29T07:20:00Z',
    },
    {
      id: 8,
      title: 'The Ritual of Morning Calm',
      tome: 'Health Scrolls',
      content:
        'Begin each day with five minutes of deep breathing and stretching. It is the shield against the chaos of the modern world.',
      createdAt: '2024-03-03T06:30:00Z',
    },
    {
      id: 9,
      title: 'The Codex of Deadlines',
      tome: 'Work Grimoire',
      content:
        'Deadlines are the dragons of the work realm. Slay them early, lest they breathe fire upon your schedule.',
      createdAt: '2024-03-04T11:05:00Z',
    },
    {
      id: 1,
      title: 'The Art of Email Alchemy',
      tome: 'Work Grimoire',
      content:
        'To craft the perfect email, one must combine brevity, clarity, and a touch of charm. Avoid the curse of the rambling message!',
      createdAt: '2024-02-25T09:15:00Z',
    },
    {
      id: 2,
      title: 'The Council’s Secret Agenda',
      tome: 'Work Grimoire',
      content:
        'Beware the cryptic language of management. Decode phrases like "let’s circle back" and "think outside the box" to survive meetings unscathed.',
      createdAt: '2024-02-26T14:30:00Z',
    },
    {
      id: 3,
      title: 'The Chronicles of Laundry',
      tome: 'Personal Tome',
      content:
        'The Laundry Mountain grows taller with each passing day. Remember: sorting is the key to victory, and folding is the final boss.',
      createdAt: '2024-02-27T18:45:00Z',
    },
    {
      id: 4,
      title: 'The Grocery Labyrinth Map',
      tome: 'Personal Tome',
      content:
        'Navigate the aisles with precision. Beware the siren call of snack foods and the treacherous checkout line.',
      createdAt: '2024-02-28T10:00:00Z',
    },

    {
      id: 6,
      title: 'The Scroll of Hydration',
      tome: 'Health Scrolls',
      content:
        'Water is the essence of vitality. Carry your flask like a sacred relic and sip often to ward off the dehydration demon.',
      createdAt: '2024-03-01T12:10:00Z',
    },
    {
      id: 7,
      title: 'The Procrastination Beast’s Weakness',
      tome: 'Personal Tome',
      content:
        'The beast grows stronger with every delay. To defeat it, break tasks into tiny quests and reward yourself with small victories.',
      createdAt: '2024-03-02T16:50:00Z',
    },

    {
      id: 10,
      title: 'The Tome of Forgotten Passwords',
      tome: 'Personal Tome',
      content:
        'Within this tome lies the wisdom of password managers. Never again shall you utter the phrase, "I forgot my password."',
      createdAt: '2024-03-05T13:40:00Z',
    },
  ],

  // notes: Array.from({ length: 1000 }, (_, index) => ({
  //   id: index + 1,
  //   title: `Scroll ${index + 1}`,
  //   tome: ['Work Grimoire', 'Personal Tome', 'Health Scrolls'][index % 3],
  //   content: `Content for scroll ${index + 1}`,
  //   createdAt: new Date().toISOString(),
  // })),

  /* note: {
    id,
    title,
    tome, // 'Work Grimoire' | 'Personal Tome' | 'Health Scrolls'
    content,
    createdAt
  }
  */
};

const scrollsSlice = createSlice({
  name: 'scrolls',
  initialState,
  reducers: {
    addScroll: (state, action) => {
      // payload = new scroll
      state.notes.push(action.payload);
    },

    deleteScroll: (state, action) => {
      // payload = id
      state.notes = state.notes.filter(
        (note) => Number(note.id) !== Number(action.payload),
      );
    },

    updateScroll: (state, action) => {
      // payload = id, new scroll
      const { id, newNote } = action.payload;

      const noteToUpdate = state.notes.find(
        (note) => Number(note.id) === Number(id),
      );
      if (noteToUpdate) {
        noteToUpdate.title = newNote.title;
        noteToUpdate.tome = newNote.tome; // Category
        noteToUpdate.content = newNote.content;
      }
    },
  },
});

export const { addScroll, deleteScroll, updateScroll } = scrollsSlice.actions;
export default scrollsSlice.reducer;
