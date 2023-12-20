import { Box } from '@mui/material';

import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';

const Arrows = (): JSX.Element => (
  <Box>
    <RightArrow />
    <LeftArrow />
  </Box>
);

export default Arrows;
