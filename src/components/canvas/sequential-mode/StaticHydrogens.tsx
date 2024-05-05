import { Group } from 'react-konva';

import { STATIC_HYDROGENS } from '@/constants/canvas';

import Hydrogen from '../molecules/atoms/Hydrogen';

interface Props {
  width: number;
  height: number;
}

const StaticHydrogens = ({ width, height }: Props): JSX.Element => (
  <Group>
    {STATIC_HYDROGENS.map(({ x, y }, index) => (
      <Hydrogen x={x * width} y={y * height} key={index} />
    ))}
  </Group>
);

export default StaticHydrogens;
