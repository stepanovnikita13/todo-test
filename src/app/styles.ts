import { Interpolation, Theme } from '@mui/material';

const styles: Interpolation<Theme> = (theme) => ({
  body: {
    backgroundColor: '#f5f5f5',
  },
  h1: {
    fontSize: '3em',
    [theme.breakpoints.up('sm')]: {
      fontSize: '4em',
    },
  },
});

export default styles;
