import { useContext } from 'react';

import { Box } from '@mui/material';

import { SEQUENTIAL_MODE_INTERVALS } from '@/constants/motion/sequential-mode-intervals';
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

const CarbonicAcidDissociation = (): JSX.Element => {
  const { state } = useContext(AppSettingsContext);
  const { intervalCount } = state;
  const rightArrowActive =
    intervalCount > SEQUENTIAL_MODE_INTERVALS[2] &&
    intervalCount < SEQUENTIAL_MODE_INTERVALS[3];
  const leftArrowActive =
    intervalCount > SEQUENTIAL_MODE_INTERVALS[3] &&
    intervalCount < SEQUENTIAL_MODE_INTERVALS[4];
  const isActive = rightArrowActive || leftArrowActive;

  return (
    <Box sx={container}>
      <CustomTypography isActive={isActive}>
        H<sub>2</sub>CO<sub>3(aq)</sub>
      </CustomTypography>
      <Arrows
        rightArrowActive={rightArrowActive}
        leftArrowActive={leftArrowActive}
      />
      <CustomTypography isActive={isActive}>
        H<sup>+</sup>
        <sub>(aq)</sub>
      </CustomTypography>
      <CustomTypography isActive={isActive}>+</CustomTypography>
      <CustomTypography isActive={isActive}>
        HCO<sub>3</sub>
        <sup>-</sup>
        <sub>(aq)</sub>
      </CustomTypography>
    </Box>
  );
};

export default CarbonicAcidDissociation;
