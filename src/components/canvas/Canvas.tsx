import { useContext } from 'react';
import { Layer, Stage } from 'react-konva';

import { SEQUENTIAL } from '@/constants/strings';
import { AppSettingsContext } from '@/contexts/AppSettingsProvider';

import ExchangeCircle from './ExchangeCircle';
import PHScale from './PHScale';
import ReefBlocker from './ReefBlocker';
import ReefGroup from './ReefGroup';
import Sea from './Sea';
import Sky from './Sky';
import Spotlight from './Spotlight';
import SequentialModeAnimations from './motion/SequentialModeAnimations';

const Canvas = (): JSX.Element => {
  const { state } = useContext(AppSettingsContext);
  const { mode, dimensions } = state;
  const { width, height } = dimensions;
  const modeSequential = mode === SEQUENTIAL;

  return (
    <Stage width={width} height={height}>
      <Layer>
        <Sea />
        <Sky />
        {!modeSequential && <ExchangeCircle />}
        {!modeSequential && <ReefGroup />}
        {!modeSequential && <ReefBlocker />}
        {!modeSequential && <PHScale />}
        {modeSequential && <SequentialModeAnimations />}
        {modeSequential && <Spotlight />}
      </Layer>
    </Stage>
  );
};

export default Canvas;
