import { Group } from 'react-konva';

import { createCarbonicAcid } from '@/utils/molecules/';

import Hydrogen from './atoms/Hydrogen';

const defaultProps = {
  rotation: 0,
};

interface Props {
  x: number;
  y: number;
  rotation?: number;
}

const DetachedHydrogen = ({ x, y, rotation }: Props): JSX.Element => {
  const { leftHydrogen } = createCarbonicAcid({ x, y });

  return (
    <Group x={x} y={y} rotation={rotation}>
      <Hydrogen x={leftHydrogen.x - x} y={leftHydrogen.y - y} />
    </Group>
  );
};

DetachedHydrogen.defaultProps = defaultProps;

export default DetachedHydrogen;
