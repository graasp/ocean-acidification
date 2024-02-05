import { useContext } from 'react';
import { Circle } from 'react-konva';

import { HYDROGEN_FILL, HYDROGEN_RADIUS } from '@/constants/canvas';
import { AppSettingsContext } from '@/contexts/AppSettingsProvider';

interface Props {
  x: number;
  y: number;
}

const Hydrogen = ({ x, y }: Props): JSX.Element => {
  const { state } = useContext(AppSettingsContext);
  const { dimensions } = state;
  const { height } = dimensions;

  return (
    <Circle
      fill={HYDROGEN_FILL}
      radius={HYDROGEN_RADIUS * height}
      x={x}
      y={y}
    />
  );
};

export default Hydrogen;
