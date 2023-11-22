import { Group, Rect } from 'react-konva';

import {
  CO2_MOLS_SKY_COORDINATES,
  SKY_GRADIENT,
  SKY_HEIGHT,
} from '@/constants/canvas';

import CarbonDioxideMolecules from './CarbonDioxideMolecules';

interface Props {
  width: number;
  height: number;
}

const Sky = ({ width, height }: Props): JSX.Element => (
  <Group>
    <Rect
      width={width}
      height={height * SKY_HEIGHT}
      fillLinearGradientEndPoint={{
        x: 0,
        y: height * SKY_HEIGHT,
      }}
      fillLinearGradientColorStops={SKY_GRADIENT}
    />
    <CarbonDioxideMolecules
      width={width}
      height={height}
      coordinates={CO2_MOLS_SKY_COORDINATES}
    />
  </Group>
);

export default Sky;
