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
import CarbonDioxideMigration from './motion/CarbonDioxideMigration';
import CarbonicAcidDissociation from './motion/CarbonicAcidDissociation';
import CarbonicAcidFormation from './motion/CarbonicAcidFormation';
import ReverseCarbonDioxideMigration from './motion/ReverseCarbonDioxideMigration';
import ReverseDissociation from './motion/ReverseDissociation';
import ReverseFormation from './motion/ReverseFormation';

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
        <CarbonicAcidFormation />
        <CarbonicAcidDissociation />
        <CarbonDioxideMigration />
        <ReverseDissociation />
        <ReverseFormation />
        <ReverseCarbonDioxideMigration />
      </Layer>
    </Stage>
  );
};

export default Canvas;
