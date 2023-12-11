import { Group } from 'react-konva';

import { CARBON_RADIUS, OXYGEN_RADIUS } from '@/constants/canvas';
import { createCarbonDioxide } from '@/utils/molecules';

import Carbon from './atoms/Carbon';
import Oxygen from './atoms/Oxygen';

interface Props {
  x: number;
  y: number;
}

const CarbonDioxide = ({ x, y }: Props): JSX.Element => {
  const { top, center, bottom } = createCarbonDioxide(
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
