import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TodoItem } from "../types/todo";

interface TodoModalState {
  selectedEntity: TodoItem | null;
  isModalVisible: boolean;
}

export const initTodoModalState: TodoModalState = {
  selectedEntity: null,
  isModalVisible: false,
};

export const todoModalSlice = createSlice({
  name: "todoModal",
  initialState: initTodoModalState,
  reducers: {
    openModal: (
      state,
      action: PayloadAction<TodoItem | null>
    ) => {
      state.isModalVisible = true;
      state.selectedEntity = action.payload;
    },
    closeModal: (state) => {
      state.isModalVisible = false;
      state.selectedEntity = null;
    }
  }
});

export const { openModal, closeModal } = todoModalSlice.actions;
