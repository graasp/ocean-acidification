import { useContext } from 'react';

import { Box } from '@mui/material';

import { ACTIVE_EQUATION_BACKGROUND } from '@/constants/side-menu';
import { AQUEOUS, EMPTY_STRING, LIQUID } from '@/constants/strings';
import { AppSettingsContext } from '@/contexts/AppSettingsProvider';
import { determineEquationsState } from '@/utils/side-menu';

import Arrows from './Arrows';
import EquationTypography from './EquationTypography';
import CarbonDioxide from './molecules/CarbonDioxide';
import CarbonicAcid from './molecules/CarbonicAcid';
import Water from './molecules/Water';

const container = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '80%',
  margin: '1em auto',
};

const CarbonicAcidFormation = (): JSX.Element => {
  const { state } = useContext(AppSettingsContext);
  const { intervalCount } = state;
  const equationsState = determineEquationsState(intervalCount);

  const { migration, formation, dissociation } = equationsState;
  const rightArrowActive = formation.rightArrow;
  const leftArrowActive = formation.leftArrow;
  const isActive = rightArrowActive || leftArrowActive;
  const isInactive =
    migration.rightArrow ||
    migration.leftArrow ||
    dissociation.rightArrow ||
    dissociation.leftArrow;
  const backgroundColor = isActive ? ACTIVE_EQUATION_BACKGROUND : EMPTY_STRING;

  return (
    <Box sx={container} style={{ backgroundColor }}>
      <EquationTypography
        molecule={<Water />}
        additionalText={LIQUID}
        isActive={isActive}
        isInactive={isInactive}
      />
      <EquationTypography
        additionalText="+"
        isActive={isActive}
        isInactive={isInactive}
      />
      <EquationTypography
        molecule={<CarbonDioxide />}
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
        molecule={<CarbonicAcid />}
        additionalText={AQUEOUS}
        isActive={isActive}
        isInactive={isInactive}
      />
    </Box>
  );
};

export default CarbonicAcidFormation;
