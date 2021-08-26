import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {TodoItem, UUID} from '../types/todo';

export interface TodoEntitiesState {
  entities: Record<UUID, TodoItem>;
}

const initialState: TodoEntitiesState = {
  entities: {},
};

export const todoEntitiesSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    toggleComplete: (state, action: PayloadAction<UUID>) => {
      const todo = state.entities[action.payload];
      todo.completed = !todo.completed;
    },
    addTodoItem: (
      state,
      action: PayloadAction<TodoItem>,
    ) => {
      const todo = action.payload;
      state.entities[todo.id] = action.payload;
    }
  },
});

export const { addTodoItem, toggleComplete } = todoEntitiesSlice.actions;
