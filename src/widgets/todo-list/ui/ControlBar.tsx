import ClearCompletedButton from '@/features/clear-completed';
import Filter, { FilterNames } from '@/features/filter';
import { Box, Chip, Stack, useMediaQuery, useTheme } from '@mui/material';

interface ControlBarProps {
  activeQuantity: number;
  onFilter: (value: FilterNames) => void;
  filter: FilterNames;
}
export const ControlBar: React.FC<ControlBarProps> = ({
  activeQuantity,
  onFilter,
  filter,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box>
      <Stack
        direction='row'
        sx={{
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          rowGap: '1rem',
        }}
      >
        <Chip label={`${activeQuantity} Items left`} color='primary' />
        <Filter
          filter={filter}
          onToggle={onFilter}
          fullWidth={isMobile}
          sx={{ [theme.breakpoints.down('sm')]: { order: -1 } }}
        />
        <ClearCompletedButton />
      </Stack>
    </Box>
  );
};
