import { Box } from '@mui/material';

import {
  ACTIVE_EQUATION_COLOR,
  INACTIVE_EQUATION_COLOR,
} from '@/constants/side-menu';

const containerStyles = {
  display: 'flex',
  alignItems: 'center',
  width: 'max-content',
};

const horizontalLine = {
  height: '2px',
  width: 20,
};

const leftArrow = {
  width: 0,
  height: 0,
  borderTop: '4px solid transparent',
  borderBottom: '4px solid transparent',
  borderRight: '4px solid',
};

interface Props {
  leftArrowActive: boolean;
}

const LeftArrow = ({ leftArrowActive }: Props): JSX.Element => {
  const color = leftArrowActive
    ? ACTIVE_EQUATION_COLOR
    : INACTIVE_EQUATION_COLOR;

  return (
    <Box sx={containerStyles}>
      <Box sx={leftArrow} style={{ borderRightColor: color }} />
      <Box sx={horizontalLine} style={{ background: color }} />
    </Box>
  );
};

export default LeftArrow;
