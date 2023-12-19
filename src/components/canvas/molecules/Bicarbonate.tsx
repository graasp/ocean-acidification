import { Group } from 'react-konva';

import { MoleculeCenter } from '@/utils/molecules/types';

import Carbon from './atoms/Carbon';
import Hydrogen from './atoms/Hydrogen';
import Oxygen from './atoms/Oxygen';

interface Coordinates {
  topOxygen: MoleculeCenter;
  leftOxygen: MoleculeCenter;
  bottomOxygen: MoleculeCenter;
  topHydrogen: MoleculeCenter;
}

interface Props {
  x: number;
  y: number;
  coordinates: Coordinates;
}

const Bicarbonate = ({ x, y, coordinates }: Props): JSX.Element => {
  const { topOxygen, leftOxygen, bottomOxygen, topHydrogen } = coordinates;

  return (
    <Group>
      <Oxygen x={topOxygen.x} y={topOxygen.y} />
      <Carbon x={x} y={y} />
      <Oxygen x={leftOxygen.x} y={leftOxygen.y} />
      <Oxygen x={bottomOxygen.x} y={bottomOxygen.y} />
      <Hydrogen x={topHydrogen.x} y={topHydrogen.y} />
    </Group>
  );
};

export default Bicarbonate;
