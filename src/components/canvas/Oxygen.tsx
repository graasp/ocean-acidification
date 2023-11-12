import { Circle } from 'react-konva';

import { OXYGEN_FILL } from '@/constants/canvas';

interface Props {
  x: number;
  y: number;
  radius: number;
}

const Oxygen = ({ x, y, radius }: Props): JSX.Element => (
  <Circle fill={OXYGEN_FILL} radius={radius} x={x} y={y} />
);

export default Oxygen;
