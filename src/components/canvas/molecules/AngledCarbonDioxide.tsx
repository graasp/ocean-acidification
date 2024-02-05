import { useContext } from 'react';
import { Group } from 'react-konva';

import { AppSettingsContext } from '@/contexts/AppSettingsProvider';
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
  const { state } = useContext(AppSettingsContext);
  const { dimensions } = state;
  const { height } = dimensions;
  const { topOxygen, bottomOxygen } = createCarbonicAcid({ x, y }, height);

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
