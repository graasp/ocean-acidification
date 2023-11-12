import { Arrow } from 'react-konva';

import {
  EXCHANGE_ARROW_BORDER,
  EXCHANGE_ARROW_BORDER_WIDTH,
  EXCHANGE_ARROW_FILL,
  EXCHANGE_ARROW_X_INDENT,
  EXCHANGE_ARROW_Y_INDENT,
} from '@/constants/canvas';

interface Props {
  direction: number;
  circleRadius: number;
}

const ExchangeArrow = ({ direction, circleRadius }: Props): JSX.Element => (
  <Arrow
    x={direction * EXCHANGE_ARROW_X_INDENT * circleRadius}
    y={direction * EXCHANGE_ARROW_Y_INDENT * circleRadius}
    points={[0, 0, 0, -direction * circleRadius]}
    fill={EXCHANGE_ARROW_FILL}
    stroke={EXCHANGE_ARROW_BORDER}
    strokeWidth={EXCHANGE_ARROW_BORDER_WIDTH}
  />
);

export default ExchangeArrow;
