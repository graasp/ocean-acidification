import { useContext } from 'react';
import { Line } from 'react-konva';

import {
  CLAW_ARM_POINTS,
  CLAW_ARM_STROKE_WIDTH,
  CRAB_COLOR,
} from '@/constants/organisms';
import { AppSettingsContext } from '@/contexts/AppSettingsProvider';
import { mapPointsToCoordinates } from '@/utils/organisms';

interface Props {
  isLeft: boolean;
}

const ClawArm = ({ isLeft }: Props): JSX.Element => {
  const { state } = useContext(AppSettingsContext);
  const { dimensions } = state;
  const { height } = dimensions;

  const xSign = isLeft ? 1 : -1;
  const points = mapPointsToCoordinates(CLAW_ARM_POINTS, xSign, height);

  return (
    <Line
      points={points}
      stroke={CRAB_COLOR}
      strokeWidth={CLAW_ARM_STROKE_WIDTH}
    />
  );
};

export default ClawArm;
