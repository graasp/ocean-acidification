import { useContext } from 'react';
import { Circle } from 'react-konva';

import { CARBON_FILL, CARBON_RADIUS } from '@/constants/canvas';
import { AppSettingsContext } from '@/contexts/AppSettingsProvider';

const defaultProps = {
  x: 0,
  y: 0,
};

interface Props {
  x?: number;
  y?: number;
}

const Carbon = ({ x, y }: Props): JSX.Element => {
  const { state } = useContext(AppSettingsContext);
  const { dimensions } = state;
  const { height } = dimensions;

  return (
    <Circle fill={CARBON_FILL} radius={CARBON_RADIUS * height} x={x} y={y} />
  );
};

Carbon.defaultProps = defaultProps;

export default Carbon;
