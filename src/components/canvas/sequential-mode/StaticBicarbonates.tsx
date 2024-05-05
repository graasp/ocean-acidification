import { Group } from 'react-konva';

import { STATIC_BICARBONATES } from '@/constants/canvas';

import Bicarbonate from '../molecules/Bicarbonate';

interface Props {
  width: number;
  height: number;
}

const StaticBicarbonates = ({ width, height }: Props): JSX.Element => (
  <Group>
    {STATIC_BICARBONATES.map(({ x, y, rotation }, index) => (
      <Bicarbonate
        x={x * width}
        y={y * height}
        rotation={rotation}
        key={index}
      />
    ))}
  </Group>
);

export default StaticBicarbonates;
