import { useContext } from 'react';
import { Layer, Stage } from 'react-konva';

import { SEQUENTIAL } from '@/constants/strings';
import { AppSettingsContext } from '@/contexts/AppSettingsProvider';

import CarbonicAcidDissociation from './CarbonicAcidDissociation';
import CarbonicAcidFormation from './CarbonicAcidFormation';
import ExchangeCircle from './ExchangeCircle';
import PHScale from './PHScale';
import ReefBlocker from './ReefBlocker';
import ReefGroup from './ReefGroup';
import Sea from './Sea';
import Sky from './Sky';

interface Props {
  width: number;
  height: number;
}

const Canvas = ({ width, height }: Props): JSX.Element => {
  const { state } = useContext(AppSettingsContext);
  const { mode } = state;
  const modeSequential = mode === SEQUENTIAL;

  return (
    <Stage width={width} height={height}>
      <Layer>
        <Sea width={width} height={height} />
        <Sky width={width} height={height} />
        <ExchangeCircle width={width} height={height} />
        {!modeSequential && <ReefGroup width={width} height={height} />}
        <ReefBlocker width={width} height={height} />
        {!modeSequential && <PHScale width={width} height={height} />}
        <CarbonicAcidFormation width={width} height={height} />
        <CarbonicAcidDissociation width={width} height={height} />
      </Layer>
    </Stage>
  );
};

export default Canvas;
