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

const Arrows = (): JSX.Element => (
  <Box sx={styles}>
    <DownArrow />
    <UpArrow />
  </Box>
);

export default Arrows;
