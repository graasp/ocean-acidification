import { useContext } from 'react';
import { Group } from 'react-konva';

import { MOTION_INTERVALS } from '@/constants/motion/intervals';
import { IONS_COMBINE_AT } from '@/constants/motion/reverse-dissociation';
import { AppSettingsContext } from '@/contexts/AppSettingsProvider';

import BicarbonateMotion from './reverse-dissociation/BicarbonateMotion';
import CarbonicAcidMotion from './reverse-dissociation/CarbonicAcidMotion';
import HydrogenMotion from './reverse-dissociation/HydrogenMotion';

const ReverseDissociation = (): JSX.Element => {
  const { state } = useContext(AppSettingsContext);
  const { intervalCount } = state;

  const beginsAfter = MOTION_INTERVALS[2];
  const ionsCombine = intervalCount >= beginsAfter + IONS_COMBINE_AT;

  return (
    <Group>
      {!ionsCombine && <BicarbonateMotion />}
      {!ionsCombine && <HydrogenMotion />}
      {ionsCombine && <CarbonicAcidMotion />}
    </Group>
  );
};

export default ReverseDissociation;
