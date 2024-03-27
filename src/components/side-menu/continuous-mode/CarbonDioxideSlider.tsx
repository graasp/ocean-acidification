import { useContext } from 'react';

import { Box } from '@mui/material';

import {
  CO2_SLIDER_MARKS,
  CO2_SLIDER_MAX,
  CO2_SLIDER_MIN,
  CO2_SLIDER_STEP,
} from '@/constants/side-menu';
import { AppSettingsContext } from '@/contexts/AppSettingsProvider';

import CustomSlider from '../common/CustomSlider';
import SideMenuHeader from '../common/SideMenuHeader';

const container = {
  width: '90%',
  margin: '0 auto',
  display: 'flex',
  justifyContent: 'center',
};

const CarbonDioxideSlider = (): JSX.Element => {
  const { state } = useContext(AppSettingsContext);
  const { isPlaying } = state;

  const label = (
    <>
      CO<sub>2</sub> (ppm)
    </>
  );

  return (
    <Box>
      <SideMenuHeader label={label} />
      <Box sx={container}>
        <CustomSlider
          min={CO2_SLIDER_MIN}
          max={CO2_SLIDER_MAX}
          marks={CO2_SLIDER_MARKS}
          disabled={isPlaying}
          step={CO2_SLIDER_STEP}
        />
      </Box>
    </Box>
  );
};

export default CarbonDioxideSlider;
