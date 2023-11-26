import { Group, Rect } from 'react-konva';

import {
  SEA_GRADIENT,
  SEA_HEIGHT,
  SKY_HEIGHT,
  WATER_MOLS_SEA_COORDINATES,
} from '@/constants/canvas';

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
    <WaterMolecules
      width={width}
      height={height}
      coordinates={WATER_MOLS_SEA_COORDINATES}
    />
  </Group>
);

export default Sea;
