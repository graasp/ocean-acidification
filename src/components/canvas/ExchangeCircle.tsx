import { useContext } from 'react';
import { Circle, Group } from 'react-konva';

import {
  EXCHANGE_CIRCLE_BORDER,
  EXCHANGE_CIRCLE_BORDER_WIDTH,
  EXCHANGE_CIRCLE_FILL,
  EXCHANGE_CIRCLE_RADIUS,
  SKY_HEIGHT,
} from '@/constants/canvas';
import { AppSettingsContext } from '@/contexts/AppSettingsProvider';

import ExchangeArrow from './ExchangeArrow';

const ExchangeCircle = (): JSX.Element => {
  const { state } = useContext(AppSettingsContext);
  const { dimensions } = state;
  const { width, height } = dimensions;

  const circleRadius = EXCHANGE_CIRCLE_RADIUS * width;

  return (
    <Group x={width / 2} y={SKY_HEIGHT * height}>
      <Circle
        radius={circleRadius}
        fill={EXCHANGE_CIRCLE_FILL}
        stroke={EXCHANGE_CIRCLE_BORDER}
        strokeWidth={EXCHANGE_CIRCLE_BORDER_WIDTH}
      />
      <ExchangeArrow direction={1} circleRadius={circleRadius} />
      <ExchangeArrow direction={-1} circleRadius={circleRadius} />
    </Group>
  );
};

export default ExchangeCircle;
