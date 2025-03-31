import { addTask, useTasks } from '@/entities/task';
import { AddTask as AddTaskIcon } from '@mui/icons-material';
import { InputAdornment, TextField } from '@mui/material';
import { useState } from 'react';

export const AddTask = () => {
  const [taskName, setTaskName] = useState('');
  const [error, setError] = useState(false);
  const [_, dispatch] = useTasks();

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setTaskName(e.target.value);
    if (error) setError(false);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (!(taskName.trim() === '')) {
        dispatch(addTask(taskName));
      } else {
        setError(true);
      }

      setTaskName('');
    }
  }

  return (
    <TextField
      error={error}
      aria-label='Add task'
      variant='standard'
      margin='none'
      placeholder='What need to be done'
      helperText={error ? 'Text field is empty!' : ''}
      value={taskName}
      onInput={handleChange}
      onKeyDown={handleKeyDown}
      slotProps={{
        input: {
          startAdornment: (
            <InputAdornment position='start'>
              <AddTaskIcon />
            </InputAdornment>
          ),
        },
      }}
      sx={{
        '&>p': {
          position: 'absolute',
          bottom: 0,
          transform: 'translateY(100%)',
        },
      }}
    />
  );
};
