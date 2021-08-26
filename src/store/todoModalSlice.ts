import {CaseReducer, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {TodoItem} from '../types/todo';

export type TodoModalState = {
  selectedEntity: TodoItem | null;
  isModalVisible: boolean;
};

export type TodoModalSliceState = {
  todoModal: TodoModalState;
};

const open: CaseReducer<TodoModalState, PayloadAction<TodoItem | null>> = (
  state,
  action,
) => {
  state.isModalVisible = true;
  state.selectedEntity = action.payload;
};

const close: CaseReducer<TodoModalState> = state => {
  state.isModalVisible = false;
  state.selectedEntity = null;
};

export const initTodoModalState: TodoModalState = {
  selectedEntity: null,
  isModalVisible: false,
};

export const todoModalSlice = createSlice({
  name: 'todoModal',
  initialState: initTodoModalState,
  reducers: {
    open,
    close,
  },
});

export const {open: openModal, close: closeModal} = todoModalSlice.actions;
