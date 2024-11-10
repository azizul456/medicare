import { createSlice } from '@reduxjs/toolkit';

const toggleSlice = createSlice({
  name: 'toggle',
  initialState: {
    isActive: false, 
  },
  reducers: {
    toggleState: (state) => {
      state.isActive = !state.isActive;
    },
    setTrue: (state) => {
      state.isActive = true;
    },
    setFalse: (state) => {
      state.isActive = false;
    },
  },
});

export const { toggleState, setTrue, setFalse } = toggleSlice.actions;
export default toggleSlice.reducer;
