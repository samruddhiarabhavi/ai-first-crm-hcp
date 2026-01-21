import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  hcpName: '',
  interactionType: 'Meeting',
  topics: '',
  sentiment: 'Neutral',
  outcomes: '',
  followUps: '',
  chatInput: '',
  aiResult: null
};

const slice = createSlice({
  name: 'interaction',
  initialState,
  reducers: {
    updateField: (state, action) => {
      state[action.payload.field] = action.payload.value;
    },
    setAIResult: (state, action) => {
      state.aiResult = action.payload;
    }
  }
});

export const { updateField, setAIResult } = slice.actions;
export default slice.reducer;
