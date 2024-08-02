import { useContext } from 'react';

import {
  Box,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from '@mui/material';

import {
  setDistribution,
  setEquilibriumCarbonDioxide,
  setSliderCarbonDioxide,
} from '@/actions/app-settings';
import { DEFAULT_CO2, PERIODS } from '@/constants/side-menu';
import { ACTIVE_CO2_DISTRIBUTION } from '@/constants/slider-molecules/active-molecules';
import { AppSettingsContext } from '@/contexts/AppSettingsProvider';
import { computeEquilibriumDistribution } from '@/utils/molecules';

import SideMenuHeader from '../common/SideMenuHeader';

const container = {
  flexDirection: 'row',
  display: 'flex',
  justifyContent: 'space-between',
  width: '90%',
  margin: '0 auto',
};

const radioButton = {
  '& svg': {
    width: '0.8em',
    height: '0.8em',
  },
};

const radioText = {
  fontSize: '0.8em',
};

const extraLabelText = {
  color: 'grey',
};

const radioButtonContainer = { display: 'flex', flexDirection: 'column' };

const Period = (): JSX.Element => {
  const { state, dispatch } = useContext(AppSettingsContext);
  const { isPlaying, sliderCarbonDioxide, equilibriumCarbonDioxide } = state;
  const atEquilibrium = sliderCarbonDioxide === equilibriumCarbonDioxide;

  const currentYear = PERIODS.find(
    (period) => period.co2 === equilibriumCarbonDioxide,
  )?.year;

  const onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const newYear = (event.target as HTMLInputElement).value;
    const newCarbonDioxide =
      PERIODS.find((period) => period.year === newYear)?.co2 || DEFAULT_CO2;
    dispatch(setSliderCarbonDioxide(newCarbonDioxide));
    dispatch(setEquilibriumCarbonDioxide(newCarbonDioxide));
    const equilibriumDistribution = computeEquilibriumDistribution(
      ACTIVE_CO2_DISTRIBUTION,
      newCarbonDioxide,
    );
    dispatch(setDistribution(equilibriumDistribution));
  };

  return (
    <Box className="continuous-mode-6">
      <SideMenuHeader label="Year" />
      <RadioGroup
        sx={container}
        value={atEquilibrium && currentYear}
        onChange={onChange}
      >
        {PERIODS.map(({ year, co2 }) => (
          <Box key={year} sx={radioButtonContainer}>
            <FormControlLabel
              value={year}
              control={<Radio color="primary" size="small" sx={radioButton} />}
              label={<Typography sx={radioText}>{year}</Typography>}
              disabled={isPlaying}
            />
            <Typography variant="caption" sx={extraLabelText}>
              ({co2} ppm)
            </Typography>
          </Box>
        ))}
      </RadioGroup>
    </Box>
  );
};

export default Period;
