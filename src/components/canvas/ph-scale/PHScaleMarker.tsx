import { useContext } from 'react';
import { Rect } from 'react-konva';

import {
  MARKER_BORDER_WIDTH,
  MARKER_FILL,
  MARKER_WIDTH,
} from '@/constants/canvas';
import { CO2_SLIDER_MAX, CO2_SLIDER_MIN } from '@/constants/side-menu';
import { AppSettingsContext } from '@/contexts/AppSettingsProvider';

interface Props {
  scaleWidth: number;
  scaleHeight: number;
}

const PHScaleMarker = ({ scaleWidth, scaleHeight }: Props): JSX.Element => {
  const { state } = useContext(AppSettingsContext);
  const { pHCarbonDioxide } = state;
  const markerWidth = scaleWidth * MARKER_WIDTH;

  const markerX =
    1 - (pHCarbonDioxide - CO2_SLIDER_MIN) / (CO2_SLIDER_MAX - CO2_SLIDER_MIN);

  return (
    <Rect
      x={markerX * scaleWidth - markerWidth / 2}
      width={markerWidth}
      height={scaleHeight}
      stroke={MARKER_FILL}
      strokeWidth={MARKER_BORDER_WIDTH}
    />
  );
};

export default PHScaleMarker;
