import { Group } from 'react-konva';

import CarbonDioxide from './CarbonDioxide';

interface MoleculeCenter {
  x: number;
  y: number;
}

interface Props {
  height: number;
  width: number;
  coordinates: MoleculeCenter[];
}

const CarbonDioxideMolecules = ({
  height,
  width,
  coordinates,
}: Props): JSX.Element => (
  <Group>
    {coordinates.map(({ x, y }, index) => (
      <CarbonDioxide x={x * width} y={y * height} key={index} />
    ))}
  </Group>
);

export default CarbonDioxideMolecules;
