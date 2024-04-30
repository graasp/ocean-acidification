import { useContext } from 'react';
import { Circle } from 'react-konva';

import {
  HYDROGEN_FILL,
  HYDROGEN_RADIUS_CONT,
  HYDROGEN_RADIUS_SEQ,
} from '@/constants/canvas';
import { SEQUENTIAL } from '@/constants/strings';
import { AppSettingsContext } from '@/contexts/AppSettingsProvider';

interface Props {
  x: number;
  y: number;
}

const Hydrogen = ({ x, y }: Props): JSX.Element => {
  const { state } = useContext(AppSettingsContext);
  const { dimensions, mode } = state;
  const { height } = dimensions;

  const radius =
    mode === SEQUENTIAL ? HYDROGEN_RADIUS_SEQ : HYDROGEN_RADIUS_CONT;

  return <Circle fill={HYDROGEN_FILL} radius={radius * height} x={x} y={y} />;
};

export default Hydrogen;
