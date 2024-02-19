import { Box } from '@mui/material';

import {
  ACTIVE_EQUATION_COLOR,
  INACTIVE_EQUATION_COLOR,
} from '@/constants/side-menu';

const container = {
  display: 'flex',
  alignItems: 'center',
  width: 'max-content',
};

const horizontalLine = {
  height: '2px',
  width: 20,
};

const rightArrow = {
  width: 0,
  height: 0,
  borderTop: '4px solid transparent',
  borderBottom: '4px solid transparent',
  borderLeft: '4px solid',
};

interface Props {
  rightArrowActive: boolean;
}

const RightArrow = ({ rightArrowActive }: Props): JSX.Element => {
  const color = rightArrowActive
    ? ACTIVE_EQUATION_COLOR
    : INACTIVE_EQUATION_COLOR;
  return (
    <Box sx={container}>
      <Box sx={horizontalLine} style={{ background: color }} />
      <Box sx={rightArrow} style={{ borderLeftColor: color }} />
    </Box>
  );
};

export default RightArrow;
