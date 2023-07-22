import { configureStore } from '@reduxjs/toolkit';

import startPageShowingReudcer from './slices/startPageShowingSlice';

export default configureStore ({
  reducer: {  
    startPageShowing: startPageShowingReudcer,
  },
});
