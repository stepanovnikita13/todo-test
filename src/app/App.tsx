import { TasksProvider } from '@/entities/task';
import TodoList from '@/widgets/todo-list';
import { Container } from '@mui/material';

function App() {
  return (
    <TasksProvider>
      <Container maxWidth='sm'>
        <h1 style={{ textAlign: 'center' }}>todos&#10024;</h1>
        <TodoList />
      </Container>
    </TasksProvider>
  );
}

export default App;
