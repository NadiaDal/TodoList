import {CaseReducer, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {TodoItem, UUID} from '../types/todo';

export type TodoEntitiesState = {
  entities: Record<UUID, TodoItem>;
};

export type TodoEntitiesSliceState = {
  todos: TodoEntitiesState;
};

const addTodoItem: CaseReducer<TodoEntitiesState, PayloadAction<TodoItem>> = (
  state,
  action,
) => {
  const todo = action.payload;
  state.entities[todo.id] = action.payload;
};

const initialState: TodoEntitiesState = {
  entities: {},
};

export const todoEntitiesSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodoItem,
  },
});

export const todoActions = todoEntitiesSlice.actions;
