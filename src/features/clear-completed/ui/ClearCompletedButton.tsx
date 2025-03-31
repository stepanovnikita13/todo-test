import { removeCompleted, useTasks } from '@/entities/task';
import { Button } from '@mui/material';

export const ClearCompletedButton = () => {
  const [_, dispatch] = useTasks();
  function handleClick() {
    dispatch(removeCompleted());
  }

  return <Button onClick={handleClick}>Clear completed</Button>;
};
