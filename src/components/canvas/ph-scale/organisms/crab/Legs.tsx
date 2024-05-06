import { useContext } from 'react';
import { Group } from 'react-konva';

import {
  BOTTOM_LEG_POINTS,
  MIDDLE_LEG_POINTS,
  UPPER_LEG_POINTS,
} from '@/constants/organisms';
import { AppSettingsContext } from '@/contexts/AppSettingsProvider';
import { mapPointsToCoordinates } from '@/utils/organisms';

import Leg from './Leg';

interface Props {
  areLeft: boolean;
}

const Legs = ({ areLeft }: Props): JSX.Element => {
  const { state } = useContext(AppSettingsContext);
  const { dimensions } = state;
  const { height } = dimensions;

  const xSign = areLeft ? 1 : -1;
  const upperLegPts = mapPointsToCoordinates(UPPER_LEG_POINTS, xSign, height);
  const middleLegPts = mapPointsToCoordinates(MIDDLE_LEG_POINTS, xSign, height);
  const bottomLegPts = mapPointsToCoordinates(BOTTOM_LEG_POINTS, xSign, height);

  return (
    <Group>
      <Leg points={upperLegPts} />
      <Leg points={middleLegPts} />
      <Leg points={bottomLegPts} />
    </Group>
  );
};

export default Legs;
