import { Box } from '@mui/material';

import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';

interface Props {
  rightArrowActive: boolean;
  leftArrowActive: boolean;
}

const Arrows = ({ rightArrowActive, leftArrowActive }: Props): JSX.Element => (
  <Box>
    <RightArrow rightArrowActive={rightArrowActive} />
    <LeftArrow leftArrowActive={leftArrowActive} />
  </Box>
);

export default Arrows;
