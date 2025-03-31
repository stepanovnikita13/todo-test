import { useContext } from 'react';
import { TasksContext } from '../model/context';
import { TasksContext as ContextType } from '../model/types';

export const useTasks = () => useContext(TasksContext) as ContextType;
