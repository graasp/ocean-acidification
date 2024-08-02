import { useContext } from 'react';

import { Box } from '@mui/material';

import { ACTIVE_EQUATION_BACKGROUND } from '@/constants/side-menu';
import { AQUEOUS, EMPTY_STRING, GAS } from '@/constants/strings';
import { AppSettingsContext } from '@/contexts/AppSettingsProvider';
import { determineEquationsState } from '@/utils/side-menu';

import Arrows from './Arrows';
import EquationTypography from './EquationTypography';
import CarbonDioxide from './molecules/CarbonDioxide';

const container = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '80%',
  margin: '1em auto',
};

const CarbonDioxideEquation = (): JSX.Element => {
  const { state } = useContext(AppSettingsContext);
  const { intervalCount } = state;
  const equationsState = determineEquationsState(intervalCount);

  const { migration, formation, dissociation } = equationsState;
  const rightArrowActive = migration.rightArrow;
  const leftArrowActive = migration.leftArrow;
  const isActive = rightArrowActive || leftArrowActive;
  const isInactive =
    formation.rightArrow ||
    formation.leftArrow ||
    dissociation.rightArrow ||
    dissociation.leftArrow;
  const backgroundColor = isActive ? ACTIVE_EQUATION_BACKGROUND : EMPTY_STRING;

  return (
    <Box sx={container} style={{ backgroundColor }}>
      <EquationTypography
        molecule={<CarbonDioxide />}
        additionalText={GAS}
        isActive={isActive}
        isInactive={isInactive}
      />
      <Arrows
        rightArrowActive={rightArrowActive}
        leftArrowActive={leftArrowActive}
        isInactive={isInactive}
      />
      <EquationTypography
        molecule={<CarbonDioxide />}
        additionalText={AQUEOUS}
        isActive={isActive}
        isInactive={isInactive}
      />
    </Box>
  );
};

export default CarbonDioxideEquation;
