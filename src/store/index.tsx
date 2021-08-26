import {configureStore} from '@reduxjs/toolkit';
import {todoModalSlice} from './todoModalSlice';
import {todoEntitiesSlice} from './todoEntitiesSlice';

export default configureStore({
  reducer: {
    todos: todoEntitiesSlice.reducer,
    todoModal: todoModalSlice.reducer,
  },
});
