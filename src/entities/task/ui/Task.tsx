import {
  ListItem,
  IconButton,
  ListItemButton,
  ListItemIcon,
  Checkbox,
  ListItemText,
  ListItemProps,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { Task as TaskType } from '../model/types';
import { useTasks } from '../lib/useTasks';
import { memo } from 'react';
import { removeTask, toggleTask } from '../model/reducer';

interface TaskProps extends ListItemProps {
  task: TaskType;
}
export const Task: React.FC<TaskProps> = memo((props) => {
  const {
    task: { id, completed, title },
  } = props;
  const [_, dispatch] = useTasks();

  function handleToggle(id: string) {
    dispatch(toggleTask(id));
  }

  function handleDelete(id: string) {
    dispatch(removeTask(id));
  }
  return (
    <ListItem
      secondaryAction={
        <IconButton aria-label='delete' onClick={() => handleDelete(id)}>
          <DeleteIcon />
        </IconButton>
      }
      disablePadding
    >
      <ListItemButton onClick={() => handleToggle(id)}>
        <ListItemIcon>
          <Checkbox name='toggle-task-status' checked={completed} />
        </ListItemIcon>
        <ListItemText
          sx={(theme) => ({
            textDecoration: completed ? 'line-through' : 'none',
            color: completed
              ? theme.palette.text.disabled
              : theme.palette.text.secondary,
          })}
        >
          {title}
        </ListItemText>
      </ListItemButton>
    </ListItem>
  );
});
