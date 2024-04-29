import { Box } from '@mui/material';

import { ARROWS_CONTAINER_HEIGHT } from '@/constants/side-menu';

import DownArrow from './DownArrow';
import UpArrow from './UpArrow';

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
    <DownArrow isActive={downActive} isLarge={downIsLarge} />
    <UpArrow isActive={upActive} isLarge={upIsLarge} />
  </Box>
);

export default Arrows;
