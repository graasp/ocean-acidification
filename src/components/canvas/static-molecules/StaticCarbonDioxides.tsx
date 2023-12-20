import { Group } from 'react-konva';

import { STATIC_CARBON_DIOXIDES } from '@/constants/canvas';

import CarbonDioxide from '../molecules/CarbonDioxide';

interface Props {
  width: number;
  height: number;
}

const StaticCarbonDioxides = ({ width, height }: Props): JSX.Element => (
  <Group>
    {STATIC_CARBON_DIOXIDES.map(({ x, y, rotation }, index) => (
      <CarbonDioxide
        x={x * width}
        y={y * height}
        rotation={rotation}
        key={index}
      />
    ))}
  </Group>
);

export default StaticCarbonDioxides;
