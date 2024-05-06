import { useContext } from 'react';
import { Arc } from 'react-konva';

import {
  CLAW_INNER_RADIUS,
  CLAW_OUTER_RADIUS,
  CLAW_SEMI_CIRCLE_ANGLE,
  CRAB_COLOR,
  LEFT_CLAW_ROTATION,
  RIGHT_CLAW_ROTATION,
} from '@/constants/organisms';
import { AppSettingsContext } from '@/contexts/AppSettingsProvider';

interface Props {
  isLeft: boolean;
}

const ClawGrabber = ({ isLeft }: Props): JSX.Element => {
  const { state } = useContext(AppSettingsContext);
  const { dimensions } = state;
  const { height } = dimensions;

  return (
    <Arc
      innerRadius={CLAW_INNER_RADIUS}
      outerRadius={CLAW_OUTER_RADIUS * height}
      fill={CRAB_COLOR}
      angle={CLAW_SEMI_CIRCLE_ANGLE}
      rotationDeg={isLeft ? LEFT_CLAW_ROTATION : RIGHT_CLAW_ROTATION}
    />
  );
};

export default ClawGrabber;
