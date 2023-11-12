import { Circle } from 'react-konva';

import { CARBON_FILL } from '@/constants/canvas';

interface Props {
  x: number;
  y: number;
  radius: number;
}

const Carbon = ({ x, y, radius }: Props): JSX.Element => (
  <Circle fill={CARBON_FILL} radius={radius} x={x} y={y} />
);

export default Carbon;
