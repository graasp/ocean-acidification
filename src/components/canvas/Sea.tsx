import { Group, Rect } from 'react-konva';

import { SEA_FILL, SEA_HEIGHT, SKY_HEIGHT } from '@/constants/canvas';

import StaticBicarbonate from './static-molecules/StaticBicarbonates';
import StaticHydrogen from './static-molecules/StaticHydrogens';
import StaticWater from './static-molecules/StaticWaters';

interface Props {
  width: number;
  height: number;
}

const Sea = ({ width, height }: Props): JSX.Element => {
  const seaHeight = height * SEA_HEIGHT;
  const skyHeight = height * SKY_HEIGHT;

  return (
    <Group y={skyHeight}>
      <Rect width={width} height={seaHeight} fill={SEA_FILL} />
      <StaticWater width={width} height={seaHeight} />
      <StaticHydrogen width={width} height={seaHeight} />
      <StaticBicarbonate width={width} height={seaHeight} />
    </Group>
  );
};

export default Sea;
