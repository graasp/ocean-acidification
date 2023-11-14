import { Rect } from 'react-konva';

import {
  MARKER_BORDER_WIDTH,
  MARKER_FILL,
  MARKER_WIDTH,
} from '@/constants/canvas';

interface Props {
  scaleWidth: number;
  scaleHeight: number;
}

const PHScaleMarker = ({ scaleWidth, scaleHeight }: Props): JSX.Element => {
  const markerWidth = scaleWidth * MARKER_WIDTH;

  return (
    <Rect
      x={scaleWidth / 2 - markerWidth / 2}
      width={markerWidth}
      height={scaleHeight}
      stroke={MARKER_FILL}
      strokeWidth={MARKER_BORDER_WIDTH}
    />
  );
};

export default PHScaleMarker;
