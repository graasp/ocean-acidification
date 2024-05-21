import { Box } from '@mui/material';

import {
  TABLE_ACTIVE_ANIMATION,
  TABLE_ARROW_ACTIVE_COLOR,
  TABLE_ARROW_DOWN_ROTATION,
  TABLE_ARROW_INACTIVE_COLOR,
  TABLE_ARROW_UP_ROTATION,
} from '@/constants/side-menu';
import { EMPTY_STRING, UP } from '@/constants/strings';

import ArrowBody from './ArrowBody';
import ArrowPointer from './ArrowPointer';

const container = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '20px',
};

interface Props {
  type: string;
  isActive: boolean;
  isLarge?: boolean;
}

const Arrow = ({ type, isActive, isLarge }: Props): JSX.Element => {
  const rotate =
    type === UP ? TABLE_ARROW_UP_ROTATION : TABLE_ARROW_DOWN_ROTATION;
  const color =
    isActive || isLarge ? TABLE_ARROW_ACTIVE_COLOR : TABLE_ARROW_INACTIVE_COLOR;
  const blink = isActive ? TABLE_ACTIVE_ANIMATION : EMPTY_STRING;

  return (
    <Box sx={{ ...container, ...blink, color, rotate }}>
      <ArrowBody isActive={isActive} isLarge={isLarge} />
      <ArrowPointer isActive={isActive} isLarge={isLarge} />
    </Box>
  );
};

export default Arrow;
