export interface Task {
  id: string;
  title: string;
  completed: boolean;
}

export type TaskState = Array<Task>;

export type AddTaskAction = {
  type: 'added';
  payload: string;
};

export type RemoveTaskAction = {
  type: 'removed';
  payload: string;
};

export type ToggleTaskAction = {
  type: 'toggled';
  payload: string;
};

export type CompletedRemoveAction = {
  type: 'completedRemoved';
};

export type TaskAction =
  | AddTaskAction
  | RemoveTaskAction
  | ToggleTaskAction
  | CompletedRemoveAction;

export type TasksContext = readonly [TaskState, React.Dispatch<TaskAction>];
