import { Task } from '@/entities/task';

export const FILTER_MAP = {
  All: () => true,
  Active: (task: Task) => !task.completed,
  Completed: (task: Task) => task.completed,
};
