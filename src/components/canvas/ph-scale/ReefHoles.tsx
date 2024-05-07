import { useContext } from 'react';
import { Circle, Group } from 'react-konva';

import {
  PH_SCALE_POINTS,
  REEF_HOLES_PERCENTAGES,
  SEA_FILL,
} from '@/constants/canvas';
import { AppSettingsContext } from '@/contexts/AppSettingsProvider';
import { ALL_HOLES, switchOnReefHoles } from '@/utils/canvas';

const ReefHoles = (): JSX.Element => {
  const { state } = useContext(AppSettingsContext);
  const { dimensions, equilibriumCarbonDioxide } = state;
  const { width, height } = dimensions;

  const currentPHIndex = PH_SCALE_POINTS.findIndex(
    ({ co2 }) => co2 === equilibriumCarbonDioxide,
  );

  const reefHolesPercentageOn = REEF_HOLES_PERCENTAGES[currentPHIndex];

  return (
    <Group>
      {switchOnReefHoles(ALL_HOLES, reefHolesPercentageOn).map(
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
