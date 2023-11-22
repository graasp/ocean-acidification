import { Group } from 'react-konva';

import { CARBON_RADIUS, OXYGEN_RADIUS } from '@/constants/canvas';
import { determineAtomCoordinates } from '@/utils/canvas';

import Carbon from './Carbon';
import Oxygen from './Oxygen';

interface Props {
  x: number;
  y: number;
}

const CarbonDioxide = ({ x, y }: Props): JSX.Element => {
  const { top, center, bottom } = determineAtomCoordinates(
    { x, y },
    OXYGEN_RADIUS,
    CARBON_RADIUS,
  );

  return (
    <Group>
      <Oxygen x={top.x} y={top.y} />
      <Carbon x={center.x} y={center.y} />
      <Oxygen x={bottom.x} y={bottom.y} />
    </Group>
  );
};

export default CarbonDioxide;
