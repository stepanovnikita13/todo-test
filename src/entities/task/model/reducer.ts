import {
  AddTaskAction,
  CompletedRemoveAction,
  RemoveTaskAction,
  TaskAction,
  TaskState,
  ToggleTaskAction,
} from './types';
import { v4 as uuidv4 } from 'uuid';

export default function tasksReducer(
  tasks: TaskState,
  action: TaskAction
): TaskState {
  switch (action.type) {
    case 'added': {
      return [
        ...tasks,
        {
          id: uuidv4(),
          title: action.payload,
          completed: false,
        },
      ];
    }
    case 'removed': {
      return tasks.filter((t) => t.id !== action.payload);
    }
    case 'toggled': {
      return tasks.map((t) =>
        t.id === action.payload ? { ...t, completed: !t.completed } : t
      );
    }
    case 'completedRemoved': {
      return tasks.filter((t) => !t.completed);
    }
    default: {
      throw Error('Unknown action: ');
    }
  }
}

export const addTask = (title: string): AddTaskAction => ({
  payload: title,
  type: 'added',
});
export const removeTask = (id: string): RemoveTaskAction => ({
  payload: id,
  type: 'removed',
});
export const toggleTask = (id: string): ToggleTaskAction => ({
  payload: id,
  type: 'toggled',
});
export const removeCompleted = (): CompletedRemoveAction => ({
  type: 'completedRemoved',
});
