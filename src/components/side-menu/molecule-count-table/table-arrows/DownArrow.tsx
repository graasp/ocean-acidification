import { Typography } from '@mui/material';

import {
  TABLE_ACTIVE_ANIMATION,
  TABLE_ARROW_ACTIVE_COLOR,
  TABLE_ARROW_ACTIVE_SIZE,
  TABLE_ARROW_INACTIVE_COLOR,
  TABLE_ARROW_INACTIVE_SIZE,
} from '@/constants/side-menu';

const styles = { userSelect: 'none' };

interface Props {
  isActive: boolean;
  isLarge?: boolean;
}

const DownArrow = ({ isActive, isLarge }: Props): JSX.Element => {
  const color =
    isActive || isLarge ? TABLE_ARROW_ACTIVE_COLOR : TABLE_ARROW_INACTIVE_COLOR;
  const variant =
    isActive || isLarge ? TABLE_ARROW_ACTIVE_SIZE : TABLE_ARROW_INACTIVE_SIZE;
  const blink = isActive ? TABLE_ACTIVE_ANIMATION : null;

  return (
    <Typography variant={variant} sx={{ ...styles, color, ...blink }}>
      ⬇
    </Typography>
  );
};

export default DownArrow;
