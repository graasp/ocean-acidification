import { useContext } from 'react';
import { Group, Rect } from 'react-konva';

import {
  PH_SCALE_BEGINS_X,
  PH_SCALE_BEGINS_Y,
  PH_SCALE_FILL,
  PH_SCALE_HEIGHT,
  PH_SCALE_WIDTH,
} from '@/constants/canvas';
import {
  CRAB_BEGINS_X,
  CRAB_BEGINS_Y,
  SHELL_BEGINS_X,
  SHELL_BEGINS_Y,
} from '@/constants/organisms';
import { AppSettingsContext } from '@/contexts/AppSettingsProvider';

import PHScaleHoles from './PHScaleHoles';
import PHScaleMarker from './PHScaleMarker';
import PHScaleUnits from './PHScaleUnits';
import Crab from './organisms/Crab';
import Shell from './organisms/Shell';

const PHScale = (): JSX.Element => {
  const { state } = useContext(AppSettingsContext);
  const { dimensions } = state;
  const { width, height } = dimensions;

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
      <Shell x={SHELL_BEGINS_X * scaleWidth} y={SHELL_BEGINS_Y * scaleHeight} />
      <Crab x={CRAB_BEGINS_X * scaleWidth} y={CRAB_BEGINS_Y * scaleHeight} />
    </Group>
  );
};

export default PHScale;
