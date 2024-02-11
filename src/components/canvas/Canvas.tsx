import { useContext } from 'react';
import { Layer, Stage } from 'react-konva';

import { SEQUENTIAL } from '@/constants/strings';
import { AppSettingsContext } from '@/contexts/AppSettingsProvider';

import Sea from './Sea';
import Shells from './Shells';
import Sky from './Sky';
import Spotlight from './Spotlight';
import ExchangeCircle from './exchange-circle/ExchangeCircle';
import SequentialModeAnimations from './motion/SequentialModeAnimations';

const Canvas = (): JSX.Element => {
  const { state } = useContext(AppSettingsContext);
  const { mode, dimensions, showShells } = state;
  const { width, height } = dimensions;
  const modeSequential = mode === SEQUENTIAL;

  return (
    <Stage width={width} height={height}>
      <Layer>
        <Sea />
        <Sky />
        {!modeSequential && <ExchangeCircle />}
        {!modeSequential && showShells && <Shells />}
        {modeSequential && <SequentialModeAnimations />}
        {modeSequential && <Spotlight />}
      </Layer>
    </Stage>
  );
};

export default Canvas;
