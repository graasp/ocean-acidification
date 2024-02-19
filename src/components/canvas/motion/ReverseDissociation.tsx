import { useContext } from 'react';
import { Group } from 'react-konva';

import { IONS_COMBINE } from '@/constants/motion/motion-intervals';
import { AppSettingsContext } from '@/contexts/AppSettingsProvider';
import { computeMovesPerInterval } from '@/utils/continuous-mode-motion';
import { ReversedDissociation } from '@/utils/molecules/types';

import BicarbonateMotion from './reverse-dissociation/BicarbonateMotion';
import CarbonicAcidMotion from './reverse-dissociation/CarbonicAcidMotion';
import HydrogenMotion from './reverse-dissociation/HydrogenMotion';

interface Props {
  beginsAfter: number;
  molecules: ReversedDissociation;
}

const ReverseDissociation = ({
  beginsAfter,
  molecules,
}: Props): JSX.Element => {
  const { state } = useContext(AppSettingsContext);
  const { intervalCount } = state;

  const ionsCombine = intervalCount >= beginsAfter + IONS_COMBINE;

  const { bicarbonate, hydrogen } = molecules;
  const movesPerInterval = computeMovesPerInterval(bicarbonate);
  const carbonicAcidBegins = { x: 0, y: 0, rotation: 0 };
  carbonicAcidBegins.x =
    bicarbonate.begins.x + movesPerInterval.x * IONS_COMBINE;
  carbonicAcidBegins.y =
    bicarbonate.begins.y + movesPerInterval.y * IONS_COMBINE;
  carbonicAcidBegins.rotation =
    bicarbonate.begins.rotation + movesPerInterval.rotation * IONS_COMBINE;

  return (
    <Group>
      {!ionsCombine && (
        <BicarbonateMotion
          beginsAfter={beginsAfter}
          coordinates={bicarbonate}
        />
      )}
      {!ionsCombine && (
        <HydrogenMotion
          beginsAfter={beginsAfter}
          coordinates={hydrogen}
          carbonicAcidBegins={carbonicAcidBegins}
        />
      )}
      {ionsCombine && (
        <CarbonicAcidMotion
          beginsAfter={beginsAfter}
          coordinates={bicarbonate}
          carbonicAcidBegins={carbonicAcidBegins}
        />
      )}
    </Group>
  );
};

export default ReverseDissociation;
