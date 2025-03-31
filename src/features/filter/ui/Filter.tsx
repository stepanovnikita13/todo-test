import {
  ToggleButtonGroup,
  ToggleButton,
  ToggleButtonGroupProps,
} from '@mui/material';
import { FILTER_MAP } from '../lib/filterMap';
import { FilterNames } from '../model/types';

const filterNames = Object.keys(FILTER_MAP) as Array<FilterNames>;

interface FilterProps extends ToggleButtonGroupProps {
  filter: FilterNames;
  onToggle: (value: FilterNames) => void;
}
export const Filter: React.FC<FilterProps> = ({
  onToggle,
  filter,
  ...props
}) => {
  function handleChange(
    _: React.MouseEvent<HTMLElement>,
    newFilter: FilterNames
  ): void {
    onToggle(newFilter);
  }

  return (
    <ToggleButtonGroup
      value={filter}
      exclusive
      aria-label='Filter tasks'
      onChange={handleChange}
      {...props}
    >
      {filterNames.map((name) => (
        <ToggleButton key={name} value={name}>
          {name}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
};
