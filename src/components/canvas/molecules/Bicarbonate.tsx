import { useContext } from 'react';
import { Group } from 'react-konva';

import { AppSettingsContext } from '@/contexts/AppSettingsProvider';
import { createCarbonicAcid } from '@/utils/molecules/';

import Carbon from './atoms/Carbon';
import Hydrogen from './atoms/Hydrogen';
import Oxygen from './atoms/Oxygen';

const defaultProps = {
  rotation: 0,
};

interface Props {
  x: number;
  y: number;
  rotation?: number;
}

const Bicarbonate = ({ x, y, rotation }: Props): JSX.Element => {
  const { state } = useContext(AppSettingsContext);
  const { dimensions } = state;
  const { height } = dimensions;
  const { topOxygen, leftOxygen, bottomOxygen, topHydrogen } =
    createCarbonicAcid({ x, y }, height);

  return (
    <Group x={x} y={y} rotation={rotation}>
      <Oxygen x={topOxygen.x - x} y={topOxygen.y - y} />
      <Carbon />
      <Oxygen x={leftOxygen.x - x} y={leftOxygen.y - y} />
      <Oxygen x={bottomOxygen.x - x} y={bottomOxygen.y - y} />
      <Hydrogen x={topHydrogen.x - x} y={topHydrogen.y - y} />
    </Group>
  );
};

Bicarbonate.defaultProps = defaultProps;

export default Bicarbonate;
