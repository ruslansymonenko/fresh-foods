import { configureStore } from '@reduxjs/toolkit';

import authReducer from './slices/authSlice';
import startPageShowingReducer from './slices/startPageShowingSlice';

export default configureStore ({
  reducer: {  
    authorization: authReducer,
    startPageShowing: startPageShowingReducer,
  },
});
