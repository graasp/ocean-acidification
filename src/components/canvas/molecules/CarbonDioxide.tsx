import { useContext } from 'react';
import { Group } from 'react-konva';

import { AppSettingsContext } from '@/contexts/AppSettingsProvider';
import { createCarbonDioxide } from '@/utils/molecules/';

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

const CarbonDioxide = ({ x, y, rotation }: Props): JSX.Element => {
  const { state } = useContext(AppSettingsContext);
  const { dimensions } = state;
  const { height } = dimensions;
  const { top, center, bottom } = createCarbonDioxide({ x, y }, height);

  return (
    <Group rotation={rotation} x={center.x} y={center.y}>
      <Oxygen x={top.x - center.x} y={top.y - center.y} />
      <Carbon />
      <Oxygen x={bottom.x - center.x} y={bottom.y - center.y} />
    </Group>
  );
};

CarbonDioxide.defaultProps = defaultProps;

export default CarbonDioxide;
