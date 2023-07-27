import { configureStore } from '@reduxjs/toolkit';

import authReducer from './slices/authSlice';
import orderReducer from './slices/orderSlice';

import startPageShowingReducer from './slices/startPageShowingSlice';

export default configureStore ({
  reducer: {  
    auth: authReducer,
    order: orderReducer,
    startPageShowing: startPageShowingReducer,
  },
});
