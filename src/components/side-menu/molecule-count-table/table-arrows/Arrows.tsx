import { Box } from '@mui/material';

import { DOWN, UP } from '@/constants/strings';

import Arrow from './Arrow';

const styles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '25%',
};

interface Props {
  downActive: boolean;
  upActive: boolean;
  downIsLarge?: boolean;
  upIsLarge?: boolean;
}

const Arrows = ({
  downActive,
  upActive,
  downIsLarge,
  upIsLarge,
}: Props): JSX.Element => (
  <Box sx={styles}>
    <Arrow direction={DOWN} isActive={downActive} isLarge={downIsLarge} />
    <Arrow direction={UP} isActive={upActive} isLarge={upIsLarge} />
  </Box>
);

export default Arrows;
