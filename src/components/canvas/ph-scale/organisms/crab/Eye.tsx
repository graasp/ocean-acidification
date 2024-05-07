import { useContext } from 'react';
import { Circle, Group, Line } from 'react-konva';

import {
  ANTENNAE_POINTS,
  ANTENNAE_STROKE_WIDTH,
  CRAB_COLOR,
  EYE_CENTER,
  EYE_FILL,
  EYE_RADIUS,
  PUPIL_FILL,
  PUPIL_RADIUS,
} from '@/constants/organisms';
import { AppSettingsContext } from '@/contexts/AppSettingsProvider';
import { mapPointsToCoordinates } from '@/utils/organisms';

interface Props {
  isLeft: boolean;
}

const Eye = ({ isLeft }: Props): JSX.Element => {
  const { state } = useContext(AppSettingsContext);
  const { dimensions } = state;
  const { height } = dimensions;

  const xSign = isLeft ? 1 : -1;
  const antennaPoints = mapPointsToCoordinates(ANTENNAE_POINTS, xSign, height);

  return (
    <Group x={xSign * EYE_CENTER.x * height} y={EYE_CENTER.y * height}>
      <Line
        stroke={CRAB_COLOR}
        strokeWidth={ANTENNAE_STROKE_WIDTH}
        points={antennaPoints}
      />
      <Circle radius={EYE_RADIUS * height} fill={EYE_FILL} />
      <Circle radius={PUPIL_RADIUS * height} fill={PUPIL_FILL} />
    </Group>
  );
};

export default Eye;
