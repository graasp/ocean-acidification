import { useContext } from 'react';
import { Ellipse } from 'react-konva';

import {
  CRAB_BODY_RADIUS_X,
  CRAB_BODY_RADIUS_Y,
  CRAB_COLOR,
} from '@/constants/organisms';
import { AppSettingsContext } from '@/contexts/AppSettingsProvider';

const CrabBody = (): JSX.Element => {
  const { state } = useContext(AppSettingsContext);
  const { dimensions } = state;
  const { height } = dimensions;

  return (
    <Ellipse
      radiusX={CRAB_BODY_RADIUS_X * height}
      radiusY={CRAB_BODY_RADIUS_Y * height}
      fill={CRAB_COLOR}
    />
  );
};

export default CrabBody;
