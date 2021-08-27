import todoEntitiesReducer, {
  initialState,
  addTodoItem,
  toggleComplete,
  loadTodoEntities,
} from '../../src/store/todoEntitiesSlice';
import {TodoPriority} from '../../src/types/todo';

jest.mock('@react-native-async-storage/async-storage', () => ({
  AsyncStorage: {
    setItem: jest.fn(),
    getItem: jest.fn(),
  },
}));

describe('todo reducer', () => {
  const todo = {
    name: 'Cat',
    priority: TodoPriority.low,
    id: 'id',
    completed: false,
    createdAt: Date.now(),
  };

  it('should return the initial state', () => {
    expect(todoEntitiesReducer(undefined, {type: ''})).toEqual(initialState);
  });

  it('should return loaded state', () => {
    expect(
      todoEntitiesReducer(
        undefined,
        loadTodoEntities.fulfilled(
          {
            [todo.id]: {...todo},
          },
          '',
        ),
      ),
    ).toEqual({
      isLoading: false,
      entities: {
        [todo.id]: {...todo},
      },
    });
  });

  it('should add todo item to the empty state', () => {
    expect(todoEntitiesReducer(initialState, addTodoItem({...todo}))).toEqual({
      isLoading: false,
      entities: {
        [todo.id]: {...todo},
      },
    });
  });

  it('should complete todo item to the empty state', () => {
    expect(
      todoEntitiesReducer(
        {
          isLoading: false,
          entities: {
            [todo.id]: {...todo},
          },
        },
        toggleComplete(todo.id),
      ),
    ).toEqual({
      isLoading: false,
      entities: {
        [todo.id]: {...todo, completed: true},
      },
    });
  });
});
