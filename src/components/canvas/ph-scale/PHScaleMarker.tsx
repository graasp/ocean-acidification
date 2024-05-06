import { useContext } from 'react';
import { Rect } from 'react-konva';

import {
  MARKER_BORDER_WIDTH,
  MARKER_FILL,
  MARKER_WIDTH,
  PH_SCALE_POINTS,
} from '@/constants/canvas';
import { AppSettingsContext } from '@/contexts/AppSettingsProvider';

interface Props {
  scaleWidth: number;
  scaleHeight: number;
}

const PHScaleMarker = ({ scaleWidth, scaleHeight }: Props): JSX.Element => {
  const { state } = useContext(AppSettingsContext);
  const { equilibriumCarbonDioxide } = state;
  const markerWidth = scaleWidth * MARKER_WIDTH;

  const currentPHIndex = PH_SCALE_POINTS.findIndex(
    ({ co2 }) => co2 === equilibriumCarbonDioxide,
  );

  const distancePerMove = scaleWidth / (PH_SCALE_POINTS.length - 1);

  return (
    <Rect
      x={distancePerMove * currentPHIndex - markerWidth / 2}
      width={markerWidth}
      height={scaleHeight}
      stroke={MARKER_FILL}
      strokeWidth={MARKER_BORDER_WIDTH}
    />
  );
};

export default PHScaleMarker;
