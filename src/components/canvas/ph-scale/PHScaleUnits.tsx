import { Group, Line, Text } from 'react-konva';

import {
  PH_SCALE_AXIS_COLOR,
  PH_SCALE_AXIS_HEIGHT,
  PH_SCALE_AXIS_LABEL_MARGIN,
  PH_SCALE_AXIS_STROKE_WIDTH,
  PH_SCALE_BEGINS_Y,
  PH_SCALE_POINTS,
} from '@/constants/canvas';
import { CENTER } from '@/constants/strings';

interface Props {
  scaleHeight: number;
  scaleWidth: number;
}

const PHScaleUnits = ({ scaleHeight, scaleWidth }: Props): JSX.Element => {
  const numPoints = PH_SCALE_POINTS.length - 1;
  const gapBetweenPoints = scaleWidth / numPoints;
  return (
    <Group>
      {PH_SCALE_POINTS.map(({ pH }, index) => {
        const x = gapBetweenPoints * index;
        const y = PH_SCALE_BEGINS_Y + scaleHeight;
        return (
          <Group key={index}>
            <Line
              x={x}
              y={y}
              points={[0, 0, 0, PH_SCALE_AXIS_HEIGHT]}
              stroke={PH_SCALE_AXIS_COLOR}
              strokeWidth={PH_SCALE_AXIS_STROKE_WIDTH}
            />
            <Text
              x={x - gapBetweenPoints / 2}
              y={y + PH_SCALE_AXIS_HEIGHT + PH_SCALE_AXIS_LABEL_MARGIN}
              text={pH.toString()}
              width={gapBetweenPoints}
              align={CENTER}
            />
          </Group>
        );
      })}
    </Group>
  );
};

export default PHScaleUnits;
