import { Group, Rect } from 'react-konva';

import {
  PH_SCALE_BEGINS_X,
  PH_SCALE_BEGINS_Y,
  PH_SCALE_FILL,
  PH_SCALE_HEIGHT,
  PH_SCALE_WIDTH,
} from '@/constants/canvas';

import PHScaleHoles from './PHScaleHoles';
import PHScaleMarker from './PHScaleMarker';
import PHScaleUnits from './PHScaleUnits';

interface Props {
  width: number;
  height: number;
}

const PHScale = ({ width, height }: Props): JSX.Element => {
  const scaleBeginsX = width * PH_SCALE_BEGINS_X;
  const scaleBeginsY = height + height * PH_SCALE_BEGINS_Y;
  const scaleWidth = width * PH_SCALE_WIDTH;
  const scaleHeight = height * PH_SCALE_HEIGHT;

  return (
    <Group x={scaleBeginsX} y={scaleBeginsY}>
      <Rect width={scaleWidth} height={scaleHeight} fill={PH_SCALE_FILL} />
      <PHScaleHoles scaleWidth={scaleWidth} scaleHeight={scaleHeight} />
      <PHScaleMarker scaleWidth={scaleWidth} scaleHeight={scaleHeight} />
      <PHScaleUnits scaleHeight={scaleHeight} scaleWidth={scaleWidth} />
    </Group>
  );
};

export default PHScale;
