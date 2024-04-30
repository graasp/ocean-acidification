import { useContext } from 'react';
import { Group } from 'react-konva';

import { AppSettingsContext } from '@/contexts/AppSettingsProvider';
import { createHydroxide } from '@/utils/molecules/';

import Hydrogen from './atoms/Hydrogen';
import Oxygen from './atoms/Oxygen';

interface Props {
  x: number;
  y: number;
}

const Hydroxide = ({ x, y }: Props): JSX.Element => {
  const { state } = useContext(AppSettingsContext);
  const { dimensions, mode } = state;
  const { height } = dimensions;
  const { oxygen, hydrogen } = createHydroxide({ x, y }, height, mode);

  return (
    <Group>
      <Hydrogen x={hydrogen.x} y={hydrogen.y} />
      <Oxygen x={oxygen.x} y={oxygen.y} />
    </Group>
  );
};

export default Hydroxide;
