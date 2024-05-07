import { useContext } from 'react';
import { Group } from 'react-konva';

import {
  PH_SCALE_BEGINS_X,
  PH_SCALE_BEGINS_Y,
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

import Crab from './Crab';
import Shell from './Shell';

const Organisms = (): JSX.Element => {
  const { state } = useContext(AppSettingsContext);
  const { dimensions } = state;
  const { width, height } = dimensions;

  const pHScaleWidth = width * PH_SCALE_WIDTH;
  const pHScaleHeight = height * PH_SCALE_HEIGHT;
  const pHScaleBeginsX = width * PH_SCALE_BEGINS_X;
  const pHScaleBeginsY = height + height * PH_SCALE_BEGINS_Y;

  return (
    <Group x={pHScaleBeginsX} y={pHScaleBeginsY}>
      <Shell
        x={SHELL_BEGINS_X * pHScaleWidth}
        y={SHELL_BEGINS_Y * pHScaleHeight}
      />
      <Crab
        x={CRAB_BEGINS_X * pHScaleWidth}
        y={CRAB_BEGINS_Y * pHScaleHeight}
      />
    </Group>
  );
};

export default Organisms;
