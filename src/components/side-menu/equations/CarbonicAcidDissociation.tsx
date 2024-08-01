import { useContext } from 'react';

import { Box } from '@mui/material';

import { ACTIVE_EQUATION_BACKGROUND } from '@/constants/side-menu';
import { AQUEOUS, EMPTY_STRING } from '@/constants/strings';
import { AppSettingsContext } from '@/contexts/AppSettingsProvider';
import { determineEquationsState } from '@/utils/side-menu';

import Arrows from './Arrows';
import EquationTypography from './EquationTypography';
import Bicarbonate from './molecules/Bicarbonate';
import CarbonicAcid from './molecules/CarbonicAcid';
import HydrogenIon from './molecules/HydrogenIon';

const container = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '80%',
  margin: '1em auto',
};

const CarbonicAcidDissociation = (): JSX.Element => {
  const { state } = useContext(AppSettingsContext);
  const { intervalCount } = state;
  const equationsState = determineEquationsState(intervalCount);

  const { migration, formation, dissociation } = equationsState;
  const rightArrowActive = dissociation.rightArrow;
  const leftArrowActive = dissociation.leftArrow;
  const isActive = rightArrowActive || leftArrowActive;
  const isInactive =
    migration.rightArrow ||
    migration.leftArrow ||
    formation.rightArrow ||
    formation.leftArrow;
  const backgroundColor = isActive ? ACTIVE_EQUATION_BACKGROUND : EMPTY_STRING;

  return (
    <Box sx={container} style={{ backgroundColor }}>
      <EquationTypography
        molecule={<CarbonicAcid />}
        additionalText={AQUEOUS}
        isActive={isActive}
        isInactive={isInactive}
      />
      <Arrows
        rightArrowActive={rightArrowActive}
        leftArrowActive={leftArrowActive}
        isInactive={isInactive}
      />
      <EquationTypography
        molecule={<HydrogenIon />}
        additionalText={AQUEOUS}
        isActive={isActive}
        isInactive={isInactive}
      />
      <EquationTypography
        additionalText="+"
        isActive={isActive}
        isInactive={isInactive}
      />
      <EquationTypography
        molecule={<Bicarbonate />}
        additionalText={AQUEOUS}
        isActive={isActive}
        isInactive={isInactive}
      />
    </Box>
  );
};

export default CarbonicAcidDissociation;
