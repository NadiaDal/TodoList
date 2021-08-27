import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';
import {TodoEntities, TodoItem, UUID} from '../types/todo';
import {getFromStorage} from './persistStore';

export interface TodoEntitiesState {
  isLoading: boolean;
  entities: TodoEntities;
}

export const initialState: TodoEntitiesState = {
  isLoading: false,
  entities: {},
};

export const loadTodoEntities = createAsyncThunk(
  'todos/loadTodoEntities',
  getFromStorage,
);

export const todoEntitiesSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    toggleComplete: (state, action: PayloadAction<UUID>) => {
      const todo = state.entities[action.payload];
      todo.completed = !todo.completed;
    },
    addTodoItem: (state, action: PayloadAction<TodoItem>) => {
      const todo = action.payload;
      state.entities[todo.id] = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(loadTodoEntities.pending, (state, _) => {
        state.isLoading = true;
      })
      .addCase(loadTodoEntities.fulfilled, (state, action) => {
        state.isLoading = false;
        state.entities = action.payload as TodoEntities;
      });
  },
});

export const {addTodoItem, toggleComplete} = todoEntitiesSlice.actions;

export default todoEntitiesSlice.reducer;
