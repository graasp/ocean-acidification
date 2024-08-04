import { useContext, useEffect, useState } from 'react';

import { StopCircleOutlined } from '@mui/icons-material';
import { Box, IconButton, Tooltip } from '@mui/material';
import { red } from '@mui/material/colors';

import {
  setDisequilibriumCyclesBeginAt,
  setDistribution,
  setEquilibriumCarbonDioxide,
  setSliderCarbonDioxide,
  togglePlay,
} from '@/actions/app-settings';
import { MOTION_INTERVAL } from '@/constants/motion/motion-intervals';
import { DEFAULT_CO2, PERIODS } from '@/constants/side-menu';
import { ACTIVE_CO2_DISTRIBUTION } from '@/constants/slider-molecules/active-molecules';
import { EMPTY_STRING } from '@/constants/strings';
import { AppSettingsContext } from '@/contexts/AppSettingsProvider';
import { computeEquilibriumDistribution } from '@/utils/molecules';

import ProgressBar from './ProgressBar';

const container = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const Stop = (): JSX.Element => {
  const [disabled, setDisabled] = useState(false);
  const [stopAtInterval, setStopAtInterval] = useState(0);
  const { state, dispatch } = useContext(AppSettingsContext);
  const {
    intervalCount,
    sliderCarbonDioxide,
    equilibriumCarbonDioxide,
    disequilibriumCyclesBeginAt,
    year,
  } = state;
  const inEquilibrium = sliderCarbonDioxide === equilibriumCarbonDioxide;

  const styles = {
    fontSize: '2em',
    color: disabled ? EMPTY_STRING : red[800],
  };

  const onStop = (): void => {
    setDisabled(true);
    let stopAt =
      MOTION_INTERVAL * (Math.floor(intervalCount / MOTION_INTERVAL) + 1);
    const disequilibriumCyclesStopAt =
      disequilibriumCyclesBeginAt + MOTION_INTERVAL * 3;
    if (!inEquilibrium && intervalCount < disequilibriumCyclesStopAt) {
      stopAt = disequilibriumCyclesStopAt;
    }
    setStopAtInterval(stopAt);
  };

  useEffect(() => {
    if (intervalCount === stopAtInterval && intervalCount > 0) {
      const initialCarbonDioxide =
        PERIODS.find((period) => period.year === year)?.co2 || DEFAULT_CO2;

      setDisabled(false);
      dispatch(togglePlay());
      dispatch(setDisequilibriumCyclesBeginAt(stopAtInterval));
      dispatch(setEquilibriumCarbonDioxide(initialCarbonDioxide));
      dispatch(setSliderCarbonDioxide(initialCarbonDioxide));
      const equilibriumDistribution = computeEquilibriumDistribution(
        ACTIVE_CO2_DISTRIBUTION,
        initialCarbonDioxide,
      );
      dispatch(setDistribution(equilibriumDistribution));
    }
  }, [intervalCount, stopAtInterval, dispatch, sliderCarbonDioxide, year]);

  return (
    <Box sx={container}>
      <Tooltip title="Stop">
        <span>
          <IconButton onClick={onStop} disabled={disabled}>
            <StopCircleOutlined sx={styles} />
          </IconButton>
        </span>
      </Tooltip>
      {disabled && <ProgressBar />}
    </Box>
  );
};

export default Stop;
