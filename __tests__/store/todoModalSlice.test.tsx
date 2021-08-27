import todoModalReducer, {
  initialState,
  openModal,
  closeModal,
} from '../../src/store/todoModalSlice';
import {TodoPriority} from '../../src/types/todo';

describe('modal reducer', () => {
  it('should return the initial state', () => {
    expect(todoModalReducer(undefined, {type: ''})).toEqual(initialState);
  });

  it('should handle open modal without init state', () => {
    const previousState = {...initialState};
    expect(todoModalReducer(previousState, openModal())).toEqual({
      selectedEntity: null,
      isModalVisible: true,
    });
  });

  it('should handle open modal with init state', () => {
    const todo = {
      name: 'Cat',
      priority: TodoPriority.low,
      id: 'id',
      completed: false,
      createdAt: Date.now(),
    };
    const previousState = {...initialState};
    expect(todoModalReducer(previousState, openModal({...todo}))).toEqual({
      selectedEntity: {...todo},
      isModalVisible: true,
    });
  });

  it('should handle close modal', () => {
    const previousState = {
      selectedEntity: null,
      isModalVisible: true,
    };
    expect(todoModalReducer(previousState, closeModal())).toEqual({
      selectedEntity: null,
      isModalVisible: false,
    });
  });
});
