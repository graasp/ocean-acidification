import { useContext, useState } from 'react';

import { Box } from '@mui/material';

import { setSliderMolecules } from '@/actions/app-settings';
import {
  CO2_DEFAULT_VALUE,
  CO2_SLIDER_MARKS,
  CO2_SLIDER_MAX,
  CO2_SLIDER_MIN,
  CO2_SLIDER_STEP,
} from '@/constants/side-menu';
import { AppSettingsContext } from '@/contexts/AppSettingsProvider';
import { updateDistribution } from '@/utils/molecules';

import CustomSlider from '../common/CustomSlider';
import SideMenuHeader from '../common/SideMenuHeader';

const container = {
  width: '90%',
  margin: '0 auto',
  display: 'flex',
  justifyContent: 'center',
};

const CarbonDioxideSlider = (): JSX.Element => {
  const { state, dispatch } = useContext(AppSettingsContext);
  const { isPlaying, sliderMolecules, intervalCount } = state;
  const [sliderValue, setSliderValue] = useState(CO2_DEFAULT_VALUE);

  const label = (
    <>
      CO<sub>2</sub> (ppm)
    </>
  );

  const onChange = (event: Event, value: number | number[]): void => {
    const updatedDistribution = updateDistribution(
      sliderMolecules,
      value,
      intervalCount,
    );
    dispatch(setSliderMolecules(updatedDistribution));
    const newValue = Array.isArray(value) ? value[0] : value;
    setSliderValue(newValue);
  };

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
          onChange={onChange}
          value={sliderValue}
        />
      </Box>
    </Box>
  );
};

export default CarbonDioxideSlider;
