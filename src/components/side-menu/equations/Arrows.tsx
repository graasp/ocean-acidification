import { Box } from '@mui/material';

import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';

interface Props {
  rightArrowActive: boolean;
  leftArrowActive: boolean;
  isInactive: boolean;
}

const Arrows = ({
  rightArrowActive,
  leftArrowActive,
  isInactive,
}: Props): JSX.Element => (
  <Box>
    <RightArrow
      rightArrowActive={rightArrowActive}
      leftArrowActive={leftArrowActive}
      isInactive={isInactive}
    />
    <LeftArrow
      rightArrowActive={rightArrowActive}
      leftArrowActive={leftArrowActive}
      isInactive={isInactive}
    />
  </Box>
);

export default Arrows;
