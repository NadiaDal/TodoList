export type UUID = string;

export enum TodoPriority {
  high = 'high',
  medium = 'medium',
  low = 'low',
}

export interface TodoItem {
  id: UUID;
  name: string;
  description: string;
  priority: TodoPriority;
  completed: boolean;
}