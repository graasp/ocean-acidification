import { Box } from '@mui/material';

import {
  TABLE_ARROW_BODY_SIDE_LARGE,
  TABLE_ARROW_BODY_SIDE_SMALL,
  TABLE_ARROW_BODY_TOP_LARGE,
  TABLE_ARROW_BODY_TOP_SMALL,
} from '@/constants/side-menu';

interface Props {
  isActive: boolean;
  isLarge?: boolean;
}

const ArrowBody = ({ isActive, isLarge }: Props): JSX.Element => {
  const sideBorders =
    isActive || isLarge
      ? TABLE_ARROW_BODY_SIDE_LARGE
      : TABLE_ARROW_BODY_SIDE_SMALL;
  const topBorders =
    isActive || isLarge
      ? TABLE_ARROW_BODY_TOP_LARGE
      : TABLE_ARROW_BODY_TOP_SMALL;

  return (
    <Box
      sx={{
        borderStyle: 'solid',
        borderLeftWidth: sideBorders,
        borderRightWidth: sideBorders,
        borderTopWidth: topBorders,
        borderBottomWidth: topBorders,
      }}
    />
  );
};

export default ArrowBody;
