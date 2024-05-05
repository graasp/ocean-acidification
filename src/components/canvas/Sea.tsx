import { useContext } from 'react';
import { Group, Rect } from 'react-konva';

import { SEA_FILL, SEA_HEIGHT, SKY_HEIGHT } from '@/constants/canvas';
import { SEQUENTIAL } from '@/constants/strings';
import { AppSettingsContext } from '@/contexts/AppSettingsProvider';

import SequentialModeStaticMolecules from './sequential-mode/SequentialModeStaticMolecules';

const Sea = (): JSX.Element => {
  const { state } = useContext(AppSettingsContext);
  const { dimensions, mode } = state;
  const { width, height } = dimensions;
  const modeSequential = mode === SEQUENTIAL;

  const seaWidth = width;
  const seaHeight = height * SEA_HEIGHT;
  const skyHeight = height * SKY_HEIGHT;

  return (
    <Group y={skyHeight}>
      <Rect width={width} height={seaHeight} fill={SEA_FILL} />
      {modeSequential && (
        <SequentialModeStaticMolecules
          seaWidth={seaWidth}
          seaHeight={seaHeight}
        />
      )}
    </Group>
  );
};

export default Sea;
