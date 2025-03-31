import { expect, test } from '@jest/globals';
import tasksReduser, {
  addTask,
  removeCompleted,
  removeTask,
  toggleTask,
} from '../reducer';
import { TaskState } from '../types';

const initialState: TaskState = [
  { id: '1', title: 'Task 1', completed: false },
  { id: '2', title: 'Task 2', completed: true },
  { id: '3', title: 'Task 3', completed: false },
  { id: '4', title: 'Task 4', completed: true },
];

test('Add new task', () => {
  const endState = tasksReduser(initialState, addTask('Task 5'));
  expect(endState).toHaveLength(5);
  expect(endState[4].title).toBe('Task 5');
});

test('Remove task', () => {
  const endState = tasksReduser(initialState, removeTask('2'));
  expect(endState).toHaveLength(3);
  expect(endState[1].title).toBe('Task 3');
});

test('Toggle task', () => {
  const endState = tasksReduser(initialState, toggleTask('4'));
  expect(endState[3].completed).toBe(false);
});

test('Toggle task', () => {
  const endState = tasksReduser(initialState, removeCompleted());
  expect(endState).toHaveLength(2);
  expect(endState[0].completed).toBe(false);
  expect(endState[1].completed).toBe(false);
});
