import { useReducer } from 'react';
import tasksReducer from './reducer';
import { initialState, TasksContext } from './context';

interface TasksProviderProps {
  children: React.ReactNode;
}
export const TasksProvider: React.FC<TasksProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(tasksReducer, initialState);

  return (
    <TasksContext.Provider value={[state, dispatch]}>
      {children}
    </TasksContext.Provider>
  );
};
