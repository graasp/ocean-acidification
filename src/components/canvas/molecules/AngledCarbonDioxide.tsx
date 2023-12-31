import { Group } from 'react-konva';

import { createCarbonicAcid } from '@/utils/molecules/';

import Carbon from './atoms/Carbon';
import Oxygen from './atoms/Oxygen';

const defaultProps = {
  rotation: 0,
};

interface Props {
  x: number;
  y: number;
  rotation?: number;
}

const AngledCarbonDioxide = ({ x, y, rotation }: Props): JSX.Element => {
  const { topOxygen, bottomOxygen } = createCarbonicAcid({ x, y });

  return (
    <Group x={x} y={y} rotation={rotation}>
      <Oxygen x={topOxygen.x - x} y={topOxygen.y - y} />
      <Carbon />
      <Oxygen x={bottomOxygen.x - x} y={bottomOxygen.y - y} />
    </Group>
  );
};

AngledCarbonDioxide.defaultProps = defaultProps;

export default AngledCarbonDioxide;
