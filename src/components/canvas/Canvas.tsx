import { useContext } from 'react';
import { Layer, Stage } from 'react-konva';

import { SEQUENTIAL } from '@/constants/strings';
import { AppSettingsContext } from '@/contexts/AppSettingsProvider';

import Scale from './Scale';
import Sea from './Sea';
import Sky from './Sky';
import ContinuousModeAnimations from './animations/ContinuousModeAnimations';
import SequentialModeAnimations from './animations/SequentialModeAnimations';
import SliderMolecules from './slider-molecules/SliderMolecules';

const Canvas = (): JSX.Element => {
  const { state } = useContext(AppSettingsContext);
  const { mode, dimensions, showScale } = state;
  const { width, height } = dimensions;
  const modeSequential = mode === SEQUENTIAL;

  return (
    <Stage width={width} height={height}>
      <Layer>
        <Sea />
        <Sky />
        {!modeSequential && showScale && <Scale />}
        {modeSequential ? (
          <SequentialModeAnimations />
        ) : (
          <ContinuousModeAnimations />
        )}
        {!modeSequential && <SliderMolecules />}
      </Layer>
    </Stage>
  );
};

export default Canvas;
