import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {TodoItem} from '../types/todo';

interface TodoModalState {
  selectedEntity: TodoItem | null;
  isModalVisible: boolean;
}

export const initialState: TodoModalState = {
  selectedEntity: null,
  isModalVisible: false,
};

export const todoModalSlice = createSlice({
  name: 'todoModal',
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<TodoItem | undefined>) => {
      state.isModalVisible = true;
      state.selectedEntity = action.payload ?? null;
    },
    closeModal: state => {
      state.isModalVisible = false;
      state.selectedEntity = null;
    },
  },
});

export const {openModal, closeModal} = todoModalSlice.actions;

export default todoModalSlice.reducer;
