import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from '@/app/App';
import { CssBaseline, GlobalStyles } from '@mui/material';
import globalStyles from './styles';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CssBaseline />
    <GlobalStyles styles={globalStyles} />
    <App />
  </StrictMode>
);
