import { useContext } from 'react';
import { Circle, Group } from 'react-konva';

import { SEA_FILL } from '@/constants/canvas';
import { AppSettingsContext } from '@/contexts/AppSettingsProvider';
import { ALL_HOLES, switchOnReefHoles } from '@/utils/canvas';

const ReefHoles = (): JSX.Element => {
  const { state } = useContext(AppSettingsContext);
  const { reefHoles, dimensions } = state;
  const { width, height } = dimensions;

  return (
    <Group>
      {switchOnReefHoles(ALL_HOLES, reefHoles).map(
        ({ x, y, size, switchedOn }, index) =>
          switchedOn ? (
            <Circle
              x={x * width}
              y={y * height}
              radius={size * width}
              fill={SEA_FILL}
              key={index}
            />
          ) : null,
      )}
    </Group>
  );
};

export default ReefHoles;
