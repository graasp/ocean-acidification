import { Circle } from 'react-konva';

import { OXYGEN_FILL, OXYGEN_RADIUS } from '@/constants/canvas';

const defaultProps = {
  x: 0,
  y: 0,
};
interface Props {
  x?: number;
  y?: number;
}

const Oxygen = ({ x, y }: Props): JSX.Element => (
  <Circle fill={OXYGEN_FILL} radius={OXYGEN_RADIUS} x={x} y={y} />
);

Oxygen.defaultProps = defaultProps;

export default Oxygen;
