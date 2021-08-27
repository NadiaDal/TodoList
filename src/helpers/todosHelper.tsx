import {TodoEntities, TodoItem, TodoPriority} from '../types/todo';

export const prepareTodosList = (entities: TodoEntities) => {
  return Object.values(entities);
};

const priorities = {
  [TodoPriority.high]: 0,
  [TodoPriority.medium]: 1,
  [TodoPriority.low]: 3,
};

export const sortTodoList = (list: TodoItem[]) => {
  return list.sort(
    (todoA, todoB) =>
      +todoA.completed - +todoB.completed ||
      priorities[todoA.priority] - priorities[todoB.priority] ||
      todoA.createdAt - todoB.createdAt,
  );
};
