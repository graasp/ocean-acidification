import { Group, Rect } from 'react-konva';

import {
  MARKER_BORDER_WIDTH,
  MARKER_FILL,
  MARKER_WIDTH,
  PH_SCALE_BEGINS_X,
  PH_SCALE_BEGINS_Y,
  PH_SCALE_BORDER_RADIUS,
  PH_SCALE_GRADIENT,
  PH_SCALE_HEIGHT,
  PH_SCALE_WIDTH,
} from '@/constants/canvas';

interface Props {
  width: number;
  height: number;
}

const PHScale = ({ width, height }: Props): JSX.Element => {
  const scaleBeginsX = width * PH_SCALE_BEGINS_X;
  const scaleBeginsY = height + height * PH_SCALE_BEGINS_Y;
  const scaleWidth = width * PH_SCALE_WIDTH;
  const scaleHeight = height * PH_SCALE_HEIGHT;
  const markerWidth = scaleWidth * MARKER_WIDTH;

  return (
    <Group x={scaleBeginsX} y={scaleBeginsY}>
      <Rect
        width={scaleWidth}
        height={scaleHeight}
        fillLinearGradientEndPoint={{ x: scaleWidth, y: 0 }}
        fillLinearGradientColorStops={PH_SCALE_GRADIENT}
        cornerRadius={PH_SCALE_BORDER_RADIUS}
      />
      <Rect
        x={scaleWidth / 2}
        width={markerWidth}
        height={scaleHeight}
        stroke={MARKER_FILL}
        strokeWidth={MARKER_BORDER_WIDTH}
      />
    </Group>
  );
};

export default PHScale;
