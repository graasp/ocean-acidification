import { Circle } from 'react-konva';

import { CARBON_FILL, CARBON_RADIUS } from '@/constants/canvas';

const defaultProps = {
  x: 0,
  y: 0,
};

interface Props {
  x?: number;
  y?: number;
}

const Carbon = ({ x, y }: Props): JSX.Element => (
  <Circle fill={CARBON_FILL} radius={CARBON_RADIUS} x={x} y={y} />
);

Carbon.defaultProps = defaultProps;

export default Carbon;
