import { useContext } from 'react';
import { Line } from 'react-konva';

import { REEF_COLOR, REEF_POINTS, REEF_TENSION } from '@/constants/canvas';
import { AppSettingsContext } from '@/contexts/AppSettingsProvider';

interface Props {
  x: number;
  y: number;
  rotation: number;
}

const Reef = ({ x, y, rotation }: Props): JSX.Element => {
  const { state } = useContext(AppSettingsContext);
  const { dimensions } = state;
  const { width, height } = dimensions;

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
