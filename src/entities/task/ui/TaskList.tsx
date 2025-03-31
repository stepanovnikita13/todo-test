import { List } from '@mui/material';
import { Task } from './Task';
import { Task as TaskType } from '../model/types';

interface TaksListProps {
  tasks: TaskType[];
}
export const TaskList: React.FC<TaksListProps> = ({ tasks }) => {
  return (
    <List>
      {tasks.map((t) => (
        <Task key={t.id} task={t} />
      ))}
    </List>
  );
};
