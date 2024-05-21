import { Box } from '@mui/material';

import { ARROWS_CONTAINER_HEIGHT } from '@/constants/side-menu';
import { DOWN, UP } from '@/constants/strings';

import Arrow from './Arrow';

const styles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: ARROWS_CONTAINER_HEIGHT,
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
    <Arrow type={DOWN} isActive={downActive} isLarge={downIsLarge} />
    <Arrow type={UP} isActive={upActive} isLarge={upIsLarge} />
  </Box>
);

export default Arrows;
