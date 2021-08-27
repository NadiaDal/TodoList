import {TodoEntities, TodoItem, TodoPriority} from '../src/types/todo';

export const todoEntities: TodoEntities = {
  'ae3ae48a-f9d6-4f03-a400-ab1f2c3086ca': {
    id: 'ae3ae48a-f9d6-4f03-a400-ab1f2c3086ca',
    completed: false,
    createdAt: 1629994625278,
    name: 'cat',
    description: 'food',
    priority: TodoPriority.medium,
  },
  'e554d107-a052-4584-b6fb-79848f3170d7': {
    id: 'e554d107-a052-4584-b6fb-79848f3170d7',
    completed: true,
    createdAt: 1629994655079,
    name: 'dog',
    description: 'food',
    priority: TodoPriority.high,
  },
  'e114d107-a052-4584-b6fb-79848f3170d7': {
    id: 'e114d107-a052-4584-b6fb-79848f3170d7',
    completed: false,
    createdAt: 1629994635079,
    name: 'cow',
    description: 'food',
    priority: TodoPriority.high,
  },
};

export const todoList: TodoItem[] = [
  {
    id: 'ae3ae48a-f9d6-4f03-a400-ab1f2c3086ca',
    completed: false,
    createdAt: 1629994625278,
    name: 'cat',
    description: 'food',
    priority: TodoPriority.medium,
  },
  {
    id: 'e554d107-a052-4584-b6fb-79848f3170d7',
    completed: true,
    createdAt: 1629994655079,
    name: 'dog',
    description: 'food',
    priority: TodoPriority.high,
  },
  {
    id: 'e114d107-a052-4584-b6fb-79848f3170d7',
    completed: false,
    createdAt: 1629994635079,
    name: 'cow',
    description: 'food',
    priority: TodoPriority.high,
  },
];

export const todoListSorted: TodoItem[] = [
  {
    id: 'e114d107-a052-4584-b6fb-79848f3170d7',
    completed: false,
    createdAt: 1629994635079,
    name: 'cow',
    description: 'food',
    priority: TodoPriority.high,
  },
  {
    id: 'ae3ae48a-f9d6-4f03-a400-ab1f2c3086ca',
    completed: false,
    createdAt: 1629994625278,
    name: 'cat',
    description: 'food',
    priority: TodoPriority.medium,
  },
  {
    id: 'e554d107-a052-4584-b6fb-79848f3170d7',
    completed: true,
    createdAt: 1629994655079,
    name: 'dog',
    description: 'food',
    priority: TodoPriority.high,
  },
];
