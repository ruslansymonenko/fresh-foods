import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialStateState: {
    isUser: true,
  },
});

export default authSlice.reducer;