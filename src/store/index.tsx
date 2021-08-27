import {configureStore} from '@reduxjs/toolkit';
import todoModalReducer from './todoModalSlice';
import todoEntitiesReducer from './todoEntitiesSlice';

const store = configureStore({
  reducer: {
    todos: todoEntitiesReducer,
    todoModal: todoModalReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
