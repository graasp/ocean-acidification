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
  width: '50%',
  margin: '1em auto',
};

const CarbonDioxideEquation = (): JSX.Element => {
  const { state } = useContext(AppSettingsContext);
  const { intervalCount } = state;
  const rightArrowActive =
    intervalCount > 0 && intervalCount < SEQUENTIAL_MODE_INTERVALS[1];
  const leftArrowActive =
    intervalCount > SEQUENTIAL_MODE_INTERVALS[5] &&
    intervalCount < SEQUENTIAL_MODE_INTERVALS[6];
  const isActive = rightArrowActive || leftArrowActive;

  return (
    <Box sx={container}>
      <CustomTypography isActive={isActive}>
        CO<sub>2(g)</sub>
      </CustomTypography>
      <Arrows
        rightArrowActive={rightArrowActive}
        leftArrowActive={leftArrowActive}
      />
      <CustomTypography isActive={isActive}>
        CO<sub>2(aq)</sub>
      </CustomTypography>
    </Box>
  );
};

export default CarbonDioxideEquation;
