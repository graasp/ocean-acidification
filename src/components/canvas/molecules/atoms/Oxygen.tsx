import { useContext } from 'react';
import { Circle } from 'react-konva';

import {
  OXYGEN_FILL,
  OXYGEN_RADIUS_CONT,
  OXYGEN_RADIUS_SEQ,
} from '@/constants/canvas';
import { SEQUENTIAL } from '@/constants/strings';
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
  const { dimensions, mode } = state;
  const { height } = dimensions;

  const radius = mode === SEQUENTIAL ? OXYGEN_RADIUS_SEQ : OXYGEN_RADIUS_CONT;

  return <Circle fill={OXYGEN_FILL} radius={radius * height} x={x} y={y} />;
};

Oxygen.defaultProps = defaultProps;

export default Oxygen;
