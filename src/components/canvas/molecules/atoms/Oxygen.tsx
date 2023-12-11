import { Circle } from 'react-konva';

import { OXYGEN_FILL, OXYGEN_RADIUS } from '@/constants/canvas';

interface Props {
  x: number;
  y: number;
}

const Oxygen = ({ x, y }: Props): JSX.Element => (
  <Circle fill={OXYGEN_FILL} radius={OXYGEN_RADIUS} x={x} y={y} />
);

export default Oxygen;
