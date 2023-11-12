import { Group } from 'react-konva';

import { RANDOM_COORDINATES } from '@/constants/canvas';

import CarbonDioxide from './CarbonDioxide';

interface Props {
  height: number;
  width: number;
}

const AllMolecules = ({ height, width }: Props): JSX.Element => (
  <Group>
    {RANDOM_COORDINATES.map(({ x, y }, index) => (
      <CarbonDioxide x={x * width} y={y * height} key={index} />
    ))}
  </Group>
);

export default AllMolecules;
