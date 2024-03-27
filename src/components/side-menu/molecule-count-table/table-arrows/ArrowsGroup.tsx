import { Box } from '@mui/material';

import {
  ALL_ARROWS_CONTAINER_HEIGHT,
  ALL_ARROWS_CONTAINER_MARGIN_TOP,
} from '@/constants/side-menu';

import Arrows from './Arrows';

const styles = {
  position: 'absolute',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  width: '90%',
  height: ALL_ARROWS_CONTAINER_HEIGHT,
  marginTop: ALL_ARROWS_CONTAINER_MARGIN_TOP,
  zIndex: 1000,
};

const ArrowsGroup = (): JSX.Element => (
  <Box sx={styles}>
    <Arrows />
    <Arrows />
    <Arrows />
  </Box>
);

export default ArrowsGroup;
