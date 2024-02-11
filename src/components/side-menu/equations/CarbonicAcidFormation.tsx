import { useContext } from 'react';

import { Box } from '@mui/material';

import { MOTION_INTERVALS } from '@/constants/motion/intervals';
import { AppSettingsContext } from '@/contexts/AppSettingsProvider';

import Arrows from './Arrows';
import CustomTypography from './CustomTypography';

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
  const rightArrowActive =
    intervalCount > MOTION_INTERVALS[0] && intervalCount < MOTION_INTERVALS[1];
  const leftArrowActive =
    intervalCount > MOTION_INTERVALS[3] && intervalCount < MOTION_INTERVALS[4];
  const isActive = rightArrowActive || leftArrowActive;

  return (
    <Box sx={container}>
      <CustomTypography isActive={isActive}>
        H<sub>2</sub>O<sub>(aq)</sub>
      </CustomTypography>
      <CustomTypography isActive={isActive}>+</CustomTypography>
      <CustomTypography isActive={isActive}>
        CO<sub>2(aq)</sub>
      </CustomTypography>
      <Arrows
        rightArrowActive={rightArrowActive}
        leftArrowActive={leftArrowActive}
      />
      <CustomTypography isActive={isActive}>
        H<sub>2</sub>CO<sub>3(aq)</sub>
      </CustomTypography>
    </Box>
  );
};

export default CarbonicAcidFormation;
