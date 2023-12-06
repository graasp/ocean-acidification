import { Line } from 'react-konva';

import { REEF_COLOR, REEF_POINTS, REEF_TENSION } from '@/constants/canvas';

interface Props {
  width: number;
  height: number;
  x: number;
  y: number;
  rotation: number;
}

const Reef = ({ width, height, x, y, rotation }: Props): JSX.Element => {
  const points = REEF_POINTS.map((point) => point * height);

  return (
    <Line
      x={x * width}
      y={y * height}
      points={points}
      closed
      tension={REEF_TENSION}
      fill={REEF_COLOR}
      rotation={rotation}
    />
  );
};

export default Reef;
