import { createSlice } from '@reduxjs/toolkit';

export const startPageShowingSlice = createSlice({
  name: 'startPageShowing',
  initialState: {
    isStartPage: false,
  },
  reducers: {
    setIsStartPage: (state, action) => {
      state.isStartPage = action.payload;
    },
  },
});

export const {setIsStartPage} = startPageShowingSlice.reducer;

export default startPageShowingSlice.reducer;