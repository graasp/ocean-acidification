import { useContext } from 'react';

import { Box } from '@mui/material';

import {
  ALL_ARROWS_CONTAINER_HEIGHT,
  ALL_ARROWS_CONTAINER_MARGIN_TOP,
} from '@/constants/side-menu';
import { AppSettingsContext } from '@/contexts/AppSettingsProvider';
import { AllArrowsState } from '@/utils/molecules/types';

import Arrows from './Arrows';

const styles = {
  position: 'absolute',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  width: '90%',
  height: ALL_ARROWS_CONTAINER_HEIGHT,
  marginTop: ALL_ARROWS_CONTAINER_MARGIN_TOP,
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
