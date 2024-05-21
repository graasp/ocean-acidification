import { Box } from '@mui/material';

import {
  TABLE_ARROW_POINTER_LARGE,
  TABLE_ARROW_POINTER_SMALL,
} from '@/constants/side-menu';

interface Props {
  isActive: boolean;
  isLarge?: boolean;
}

const pointer = {
  borderLeftStyle: 'solid',
  borderRightStyle: 'solid',
  borderTopStyle: 'solid',
  borderLeftColor: 'transparent',
  borderRightColor: 'transparent',
};

const ArrowPointer = ({ isActive, isLarge }: Props): JSX.Element => {
  const baseBorders =
    isActive || isLarge ? TABLE_ARROW_POINTER_LARGE : TABLE_ARROW_POINTER_SMALL;

  return (
    <Box
      sx={{
        ...pointer,
        borderLeftWidth: baseBorders,
        borderRightWidth: baseBorders,
        borderTopWidth: baseBorders,
      }}
    />
  );
};

export default ArrowPointer;
