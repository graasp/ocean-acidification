import { Circle } from 'react-konva';

import { HYDROGEN_FILL, HYDROGEN_RADIUS } from '@/constants/canvas';

interface Props {
  x: number;
  y: number;
}

const Hydrogen = ({ x, y }: Props): JSX.Element => (
  <Circle fill={HYDROGEN_FILL} radius={HYDROGEN_RADIUS} x={x} y={y} />
);

export default Hydrogen;
