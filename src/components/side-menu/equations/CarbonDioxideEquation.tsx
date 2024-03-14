import { useContext } from 'react';

import { Box } from '@mui/material';

import { ACTIVE_EQUATION_BACKGROUND } from '@/constants/side-menu';
import { EMPTY_STRING } from '@/constants/strings';
import { AppSettingsContext } from '@/contexts/AppSettingsProvider';
import { determineEquationsState } from '@/utils/side-menu';

import Arrows from './Arrows';
import CustomTypography from './CustomTypography';

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
      <CustomTypography isActive={isActive} isInactive={isInactive}>
        CO<sub>2(g)</sub>
      </CustomTypography>
      <Arrows
        rightArrowActive={rightArrowActive}
        leftArrowActive={leftArrowActive}
        isInactive={isInactive}
      />
      <CustomTypography isActive={isActive} isInactive={isInactive}>
        CO<sub>2(aq)</sub>
      </CustomTypography>
    </Box>
  );
};

export default CarbonDioxideEquation;
