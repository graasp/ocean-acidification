import { Group } from 'react-konva';

import Water from './Water';

interface MoleculeCenter {
  x: number;
  y: number;
}

interface Props {
  height: number;
  width: number;
  coordinates: MoleculeCenter[];
}

const WaterMolecules = ({ height, width, coordinates }: Props): JSX.Element => (
  <Group>
    {coordinates.map(({ x, y }, index) => (
      <Water x={x * width} y={y * height} key={index} />
    ))}
  </Group>
);

export default WaterMolecules;
