import { useContext } from 'react';
import { Rect } from 'react-konva';

import {
  MARKER_BORDER_WIDTH,
  MARKER_FILL,
  MARKER_WIDTH,
} from '@/constants/canvas';
import { AppSettingsContext } from '@/contexts/AppSettingsProvider';

interface Props {
  scaleWidth: number;
  scaleHeight: number;
}

const PHScaleMarker = ({ scaleWidth, scaleHeight }: Props): JSX.Element => {
  const { state } = useContext(AppSettingsContext);
  const { reefHoles } = state;
  const markerWidth = scaleWidth * MARKER_WIDTH;

  return (
    <Rect
      x={(1 - reefHoles) * scaleWidth - markerWidth / 2}
      width={markerWidth}
      height={scaleHeight}
      stroke={MARKER_FILL}
      strokeWidth={MARKER_BORDER_WIDTH}
    />
  );
};

export default PHScaleMarker;
