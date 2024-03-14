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
      <CustomTypography isActive={isActive} isInactive={isInactive}>
        H<sub>2</sub>CO<sub>3(aq)</sub>
      </CustomTypography>
      <Arrows
        rightArrowActive={rightArrowActive}
        leftArrowActive={leftArrowActive}
        isInactive={isInactive}
      />
      <CustomTypography isActive={isActive} isInactive={isInactive}>
        H<sup>+</sup>
        <sub>(aq)</sub>
      </CustomTypography>
      <CustomTypography isActive={isActive} isInactive={isInactive}>
        +
      </CustomTypography>
      <CustomTypography isActive={isActive} isInactive={isInactive}>
        HCO<sub>3</sub>
        <sup>-</sup>
        <sub>(aq)</sub>
      </CustomTypography>
    </Box>
  );
};

export default CarbonicAcidDissociation;
