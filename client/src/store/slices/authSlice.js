import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'authorization',
  initialState: {
    isUser: true,
  },
});



export default authSlice.reducer;