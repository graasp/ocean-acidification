import { Circle, Group } from 'react-konva';

import { PH_SCALE_HOLES, SEA_FILL } from '@/constants/canvas';

interface Props {
  scaleWidth: number;
  scaleHeight: number;
}

const PHScaleHoles = ({ scaleWidth, scaleHeight }: Props): JSX.Element => (
  <Group>
    {PH_SCALE_HOLES.map(({ x, y, radius }, index) => (
      <Circle
        x={x * scaleWidth}
        y={y * scaleHeight}
        fill={SEA_FILL}
        radius={radius * scaleWidth}
        key={index}
      />
    ))}
  </Group>
);

export default PHScaleHoles;
