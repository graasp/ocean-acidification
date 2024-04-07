import { useContext } from 'react';

import {
  Box,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from '@mui/material';

import {
  setCarbonDioxide,
  setDistribution,
  setYear,
} from '@/actions/app-settings';
import { DEFAULT_CO2, PERIODS } from '@/constants/side-menu';
import { REACTIVE_CO2_DISTRIBUTION } from '@/constants/slider-molecules/reactive-slider-molecules';
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

const Period = (): JSX.Element => {
  const { state, dispatch } = useContext(AppSettingsContext);
  const { isPlaying, year } = state;

  const onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const newYear = (event.target as HTMLInputElement).value;
    dispatch(setYear(newYear));
    const newCarbonDioxide =
      PERIODS.find((period) => period.year === newYear)?.co2 || DEFAULT_CO2;
    dispatch(setCarbonDioxide(newCarbonDioxide));
    const equilibriumDistribution = computeEquilibriumDistribution(
      REACTIVE_CO2_DISTRIBUTION,
      newCarbonDioxide,
    );
    dispatch(setDistribution(equilibriumDistribution));
  };

  return (
    <Box>
      <SideMenuHeader label="Year" />
      <RadioGroup sx={container} value={year} onChange={onChange}>
        {PERIODS.map((period) => (
          <FormControlLabel
            key={period.year}
            value={period.year}
            control={<Radio color="primary" size="small" sx={radioButton} />}
            label={<Typography sx={radioText}>{period.year}</Typography>}
            disabled={isPlaying}
          />
        ))}
      </RadioGroup>
    </Box>
  );
};

export default Period;
