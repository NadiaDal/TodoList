import {configureStore} from '@reduxjs/toolkit';
import {todoModalSlice} from './todoModalSlice';
import {todoEntitiesSlice} from './todoEntitiesSlice';

const store = configureStore({
  reducer: {
    todos: todoEntitiesSlice.reducer,
    todoModal: todoModalSlice.reducer,
  },
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;
