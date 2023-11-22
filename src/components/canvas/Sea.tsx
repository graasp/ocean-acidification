import { Group, Rect } from 'react-konva';

import {
  CO2_MOLS_SEA_COORDINATES,
  SEA_GRADIENT,
  SEA_HEIGHT,
  SKY_HEIGHT,
  WATER_MOLS_SEA_COORDINATES,
} from '@/constants/canvas';

import CarbonDioxideMolecules from './CarbonDioxideMolecules';
import WaterMolecules from './WaterMolecules';

interface Props {
  width: number;
  height: number;
}

const Sea = ({ width, height }: Props): JSX.Element => (
  <Group>
    <Rect
      y={height * SKY_HEIGHT}
      width={width}
      height={height * SEA_HEIGHT}
      fillLinearGradientEndPoint={{
        x: 0,
        y: height * SEA_HEIGHT,
      }}
      fillLinearGradientColorStops={SEA_GRADIENT}
    />
    <CarbonDioxideMolecules
      width={width}
      height={height}
      coordinates={CO2_MOLS_SEA_COORDINATES}
    />
    <WaterMolecules
      width={width}
      height={height}
      coordinates={WATER_MOLS_SEA_COORDINATES}
    />
  </Group>
);

export default Sea;
