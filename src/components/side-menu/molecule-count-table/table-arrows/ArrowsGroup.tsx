import { useContext } from 'react';

import { Box } from '@mui/material';

import { AppSettingsContext } from '@/contexts/AppSettingsProvider';
import { AllArrowsState } from '@/utils/molecules/types';

import Arrows from './Arrows';

const styles = {
  position: 'absolute',
  marginTop: '7.5%',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  zIndex: 1000,
};

interface Props {
  arrowsState: AllArrowsState;
}

const ArrowsGroup = ({ arrowsState }: Props): JSX.Element => {
  const { state } = useContext(AppSettingsContext);
  const {
    sliderCarbonDioxide,
    equilibriumCarbonDioxide,
    intervalCount,
    disequilibriumCyclesBeginAt,
  } = state;
  const { top, middle, bottom } = arrowsState;

  const sliderIncreased = sliderCarbonDioxide > equilibriumCarbonDioxide;
  const sliderDecreased = sliderCarbonDioxide < equilibriumCarbonDioxide;
  const netIntervals = intervalCount - disequilibriumCyclesBeginAt;

  const downIsLarge = sliderIncreased && netIntervals === 0;
  const upIsLarge = sliderDecreased && netIntervals === 0;

  return (
    <Box sx={styles}>
      <Arrows
        downActive={top.down}
        upActive={top.up}
        downIsLarge={downIsLarge}
      />
      <Arrows downActive={middle.down} upActive={middle.up} />
      <Arrows
        downActive={bottom.down}
        upActive={bottom.up}
        upIsLarge={upIsLarge}
      />
    </Box>
  );
};

export default ArrowsGroup;
