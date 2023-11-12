import { Group } from 'react-konva';

import { CARBON_RADIUS, OXYGEN_RADIUS } from '@/constants/canvas';
import { determineCo2AtomCoordinates } from '@/utils/canvas';

import Carbon from './Carbon';
import Oxygen from './Oxygen';

interface Props {
  x: number;
  y: number;
}

const CarbonDioxide = ({ x, y }: Props): JSX.Element => {
  const oxygenRadius = OXYGEN_RADIUS;
  const carbonRadius = CARBON_RADIUS;
  const { topOxygen, carbon, bottomOxygen } = determineCo2AtomCoordinates(
    { x, y },
    oxygenRadius,
    carbonRadius,
  );

  return (
    <Group>
      <Oxygen x={topOxygen.x} y={topOxygen.y} radius={oxygenRadius} />
      <Carbon x={carbon.x} y={carbon.y} radius={carbonRadius} />
      <Oxygen x={bottomOxygen.x} y={bottomOxygen.y} radius={oxygenRadius} />
    </Group>
  );
};

export default CarbonDioxide;
