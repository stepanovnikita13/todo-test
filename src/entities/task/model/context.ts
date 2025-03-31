import { createContext } from 'react';
import { TaskState, TasksContext as ContextType } from './types';
import { v4 as uuidv4 } from 'uuid';

export const initialState: TaskState = [
  { id: uuidv4(), title: 'Task 1', completed: false },
  { id: uuidv4(), title: 'Task 2', completed: true },
  { id: uuidv4(), title: 'Task 3', completed: false },
  { id: uuidv4(), title: 'Task 4', completed: true },
];

export const TasksContext = createContext<ContextType | null>(null);
