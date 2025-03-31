import { TaskList, useTasks } from '@/entities/task';
import AddTask from '@/features/add-task';
import { FILTER_MAP } from '@/features/filter';
import { Paper, Stack } from '@mui/material';
import { useState } from 'react';
import { ControlBar } from './ControlBar';

export const TodoList = () => {
  const [filter, setFilter] = useState<'All' | 'Active' | 'Completed'>('All');
  const [tasks] = useTasks();
  const filteredTasks = tasks.filter(FILTER_MAP[filter]);
  const activeTasks = tasks.filter(FILTER_MAP.Active);
  return (
    <Paper
      sx={(theme) => ({
        padding: theme.spacing(2),
      })}
    >
      <Stack>
        <AddTask />
        <TaskList tasks={filteredTasks} />
        <ControlBar
          activeQuantity={activeTasks.length}
          filter={filter}
          onFilter={setFilter}
        />
      </Stack>
    </Paper>
  );
};
