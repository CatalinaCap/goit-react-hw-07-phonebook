import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './slices/contactsSlice.js';
import filterReducer from './slices/filterSlice.js';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
