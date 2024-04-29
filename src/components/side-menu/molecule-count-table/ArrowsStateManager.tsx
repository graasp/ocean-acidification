import { useContext, useEffect, useState } from 'react';

import {
  CO2_AIR_MOVING,
  CO2_WATER_MOVING,
  DEFAULT_ARROWS_STATE,
  DEPROTONATION,
  H2CO3_FORMING,
  H2CO3_FORMING_REVERSE,
  H2CO3_MOVING,
} from '@/constants/side-menu';
import { AppSettingsContext } from '@/contexts/AppSettingsProvider';

import MoleculeCountTable from './MoleculeCountTable';

const ArrowsStateManager = (): JSX.Element => {
  const [arrowsState, setArrowsState] = useState(DEFAULT_ARROWS_STATE);
  const { state } = useContext(AppSettingsContext);
  const {
    sliderCarbonDioxide,
    intervalCount,
    disequilibriumCyclesBeginAt,
    equilibriumCarbonDioxide,
    isPlaying,
  } = state;

  const sliderIncreased = sliderCarbonDioxide > equilibriumCarbonDioxide;
  const sliderDecreased = sliderCarbonDioxide < equilibriumCarbonDioxide;

  const resetArrows = (): void => setArrowsState({ ...DEFAULT_ARROWS_STATE });

  useEffect(() => {
    const netIntervals = intervalCount - disequilibriumCyclesBeginAt;

    if (sliderIncreased && isPlaying) {
      if (netIntervals <= CO2_AIR_MOVING) {
        setArrowsState({
          ...DEFAULT_ARROWS_STATE,
          top: { down: true, up: false },
        });
      } else if (
        netIntervals > CO2_AIR_MOVING &&
        netIntervals <= CO2_AIR_MOVING + 1
      ) {
        resetArrows();
      } else if (
        netIntervals > CO2_AIR_MOVING + 1 &&
        netIntervals <= H2CO3_FORMING
      ) {
        setArrowsState({
          ...DEFAULT_ARROWS_STATE,
          middle: { down: true, up: false },
        });
      } else if (
        netIntervals > H2CO3_FORMING &&
        netIntervals <= H2CO3_FORMING + 1
      ) {
        resetArrows();
      } else if (
        netIntervals > H2CO3_FORMING + 1 &&
        netIntervals < DEPROTONATION
      ) {
        setArrowsState({
          ...DEFAULT_ARROWS_STATE,
          bottom: { down: true, up: false },
        });
      } else if (netIntervals >= DEPROTONATION) {
        resetArrows();
      }
    }

    if (sliderDecreased && isPlaying) {
      if (netIntervals <= H2CO3_FORMING_REVERSE) {
        setArrowsState({
          ...DEFAULT_ARROWS_STATE,
          bottom: { down: false, up: true },
        });
      } else if (
        netIntervals > H2CO3_FORMING_REVERSE &&
        netIntervals <= H2CO3_FORMING_REVERSE + 1
      ) {
        resetArrows();
      } else if (
        netIntervals > H2CO3_FORMING_REVERSE + 1 &&
        netIntervals <= H2CO3_MOVING
      ) {
        setArrowsState({
          ...DEFAULT_ARROWS_STATE,
          middle: { down: false, up: true },
        });
      } else if (
        netIntervals > H2CO3_MOVING &&
        netIntervals <= H2CO3_MOVING + 1
      ) {
        resetArrows();
      } else if (
        netIntervals > H2CO3_MOVING + 1 &&
        netIntervals < CO2_WATER_MOVING
      ) {
        setArrowsState({
          ...DEFAULT_ARROWS_STATE,
          top: { down: false, up: true },
        });
      } else if (netIntervals >= CO2_WATER_MOVING) {
        resetArrows();
      }
    }
  }, [
    sliderIncreased,
    sliderDecreased,
    isPlaying,
    intervalCount,
    disequilibriumCyclesBeginAt,
    arrowsState,
  ]);

  return <MoleculeCountTable arrowsState={arrowsState} />;
};

export default ArrowsStateManager;
