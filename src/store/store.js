import { configureStore } from '@reduxjs/toolkit';
import getLoremReducer from '../features/get-lorem/loremSlice';
import getLoremAboutPageReducer from '../features/get-lorem-about-page/loremAboutPageSlice';

export default configureStore({
  reducer: {
    lorem: getLoremReducer,
    loremAboutPage: getLoremAboutPageReducer,
  },
});
