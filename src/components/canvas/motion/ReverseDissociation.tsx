import { useContext } from 'react';
import { Group } from 'react-konva';

import { IONS_COMBINE_AT } from '@/constants/motion/reverse-dissociation';
import { AppSettingsContext } from '@/contexts/AppSettingsProvider';

import BicarbonateMotion from './reverse-dissociation/BicarbonateMotion';
import CarbonicAcidMotion from './reverse-dissociation/CarbonicAcidMotion';
import HydrogenMotion from './reverse-dissociation/HydrogenMotion';

interface Props {
  beginsAfter: number;
}

const ReverseDissociation = ({ beginsAfter }: Props): JSX.Element => {
  const { state } = useContext(AppSettingsContext);
  const { intervalCount } = state;

  const ionsCombine = intervalCount >= beginsAfter + IONS_COMBINE_AT;

  return (
    <Group>
      {!ionsCombine && <BicarbonateMotion beginsAfter={beginsAfter} />}
      {!ionsCombine && <HydrogenMotion beginsAfter={beginsAfter} />}
      {ionsCombine && <CarbonicAcidMotion beginsAfter={beginsAfter} />}
    </Group>
  );
};

export default ReverseDissociation;
