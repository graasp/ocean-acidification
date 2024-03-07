import { useContext } from 'react';
import { Layer, Stage } from 'react-konva';

import { SEQUENTIAL } from '@/constants/strings';
import { AppSettingsContext } from '@/contexts/AppSettingsProvider';

import ContinuousModeAnimations from './ContinuousModeAnimations';
import Sea from './Sea';
import SequentialModeAnimations from './SequentialModeAnimations';
import Shells from './Shells';
import Sky from './Sky';

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
        {!modeSequential && showShells && <Shells />}
        {modeSequential ? (
          <SequentialModeAnimations />
        ) : (
          <ContinuousModeAnimations />
        )}
      </Layer>
    </Stage>
  );
};

export default Canvas;
