import { useContext } from 'react';
import { Layer, Stage } from 'react-konva';

import { SEQUENTIAL } from '@/constants/strings';
import { AppSettingsContext } from '@/contexts/AppSettingsProvider';

import CarbonicAcidDissociation from './CarbonicAcidDissociation';
import ExchangeCircle from './ExchangeCircle';
import PHScale from './PHScale';
import ReefBlocker from './ReefBlocker';
import ReefGroup from './ReefGroup';
import Sea from './Sea';
import Sky from './Sky';
import CarbonDioxideMigration from './motion/CarbonDioxideMigration';
import CarbonicAcidFormation from './motion/CarbonicAcidFormation';

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
        {!modeSequential && <ExchangeCircle width={width} height={height} />}
        {!modeSequential && <ReefGroup width={width} height={height} />}
        {!modeSequential && <ReefBlocker width={width} height={height} />}
        {!modeSequential && <PHScale width={width} height={height} />}
        <CarbonicAcidFormation width={width} height={height} />
        <CarbonicAcidDissociation width={width} height={height} />
        <CarbonDioxideMigration width={width} height={height} />
      </Layer>
    </Stage>
  );
};

export default Canvas;
