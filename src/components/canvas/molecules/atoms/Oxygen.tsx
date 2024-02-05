import { useContext } from 'react';
import { Circle } from 'react-konva';

import { OXYGEN_FILL, OXYGEN_RADIUS } from '@/constants/canvas';
import { AppSettingsContext } from '@/contexts/AppSettingsProvider';

const defaultProps = {
  x: 0,
  y: 0,
};
interface Props {
  x?: number;
  y?: number;
}

const Oxygen = ({ x, y }: Props): JSX.Element => {
  const { state } = useContext(AppSettingsContext);
  const { dimensions } = state;
  const { height } = dimensions;

  return (
    <Circle fill={OXYGEN_FILL} radius={OXYGEN_RADIUS * height} x={x} y={y} />
  );
};

Oxygen.defaultProps = defaultProps;

export default Oxygen;
