import { useContext, useEffect, useRef } from 'react';
import { Layer, Stage } from 'react-konva';

import { setDimensions } from '@/actions/app-settings';
import { CANVAS_WIDTH } from '@/constants/canvas';
import { SEQUENTIAL } from '@/constants/strings';
import { AppSettingsContext } from '@/contexts/AppSettingsProvider';

import Scale from './Scale';
import Sea from './Sea';
import Sky from './Sky';
import ContinuousModeAnimations from './animations/ContinuousModeAnimations';
import SequentialModeAnimations from './animations/SequentialModeAnimations';
import SliderMolecules from './slider-molecules/SliderMolecules';

interface Props {
  showSideMenu: boolean;
}

const Canvas = ({ showSideMenu }: Props): JSX.Element => {
  const { state } = useContext(AppSettingsContext);
  const { mode, dimensions, showScale } = state;
  const { width, height } = dimensions;
  const modeSequential = mode === SEQUENTIAL;

  const { dispatch } = useContext(AppSettingsContext);
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkSize = (): void => {
      const stageWidth = divRef.current?.offsetWidth || 0;
      const stageHeight = divRef.current?.offsetHeight || 0;
      dispatch(
        setDimensions({
          width: showSideMenu ? stageWidth * CANVAS_WIDTH : stageWidth,
          height: stageHeight,
        }),
      );
    };
    const resizeObserver = new ResizeObserver(() => {
      checkSize();
    });
    const mainContainer = document.querySelector('#container');
    if (mainContainer) {
      resizeObserver.observe(mainContainer);
    }
    checkSize();
  }, [dispatch, showSideMenu]);

  return (
    <div
      style={{
        position: 'relative',
        height: '100%',
        width: '100%',
      }}
      ref={divRef}
      id="container"
    >
      <Stage width={width} height={height} style={{ position: 'absolute' }}>
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
    </div>
  );
};

export default Canvas;
