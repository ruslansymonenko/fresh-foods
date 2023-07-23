import { configureStore } from '@reduxjs/toolkit';

import authReducer from './slices/authSlice';
import startPageShowingReudcer from './slices/startPageShowingSlice';

export default configureStore ({
  reducer: {  
    auth: authReducer,
    startPageShowing: startPageShowingReudcer,
  },
});
