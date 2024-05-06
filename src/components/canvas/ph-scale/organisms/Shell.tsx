import { useContext } from 'react';
import { Arc, Group } from 'react-konva';

import {
  SHELL_BODY_ANGLE,
  SHELL_BODY_FILL,
  SHELL_BODY_INNER_RADIUS,
  SHELL_BODY_OUTER_RADIUS,
  SHELL_BODY_ROTATION,
  SHELL_STRIP_ANGLE,
  SHELL_STRIP_FILL,
  SHELL_STRIP_INNER_RADIUS,
  SHELL_STRIP_OUTER_RADIUS,
  SHELL_STRIP_ROTATIONS,
} from '@/constants/organisms';
import { AppSettingsContext } from '@/contexts/AppSettingsProvider';

interface Props {
  x: number;
  y: number;
}

const Shell = ({ x, y }: Props): JSX.Element => {
  const { state } = useContext(AppSettingsContext);
  const { dimensions } = state;
  const { height } = dimensions;

  return (
    <Group x={x} y={y}>
      <Arc
        innerRadius={SHELL_BODY_INNER_RADIUS}
        outerRadius={SHELL_BODY_OUTER_RADIUS * height}
        fill={SHELL_BODY_FILL}
        angle={SHELL_BODY_ANGLE}
        rotation={SHELL_BODY_ROTATION}
      />
      {SHELL_STRIP_ROTATIONS.map((rotation, index) => (
        <Arc
          innerRadius={SHELL_STRIP_INNER_RADIUS}
          outerRadius={SHELL_STRIP_OUTER_RADIUS * height}
          fill={SHELL_STRIP_FILL}
          angle={SHELL_STRIP_ANGLE}
          rotation={rotation}
          key={index}
        />
      ))}
    </Group>
  );
};

export default Shell;
