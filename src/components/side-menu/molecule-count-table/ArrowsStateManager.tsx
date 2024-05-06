import { useContext, useEffect, useState } from 'react';

import { setEquilibriumCarbonDioxide } from '@/actions/app-settings';
import { MOTION_INTERVAL } from '@/constants/motion/motion-intervals';
import { DEFAULT_ARROWS } from '@/constants/side-menu';
import { AppSettingsContext } from '@/contexts/AppSettingsProvider';

import MoleculeCountTable from './MoleculeCountTable';

const ArrowsStateManager = (): JSX.Element => {
  const [arrows, setArrows] = useState(DEFAULT_ARROWS);
  const { dispatch, state } = useContext(AppSettingsContext);
  const {
    sliderCarbonDioxide,
    intervalCount,
    disequilibriumCyclesBeginAt,
    equilibriumCarbonDioxide,
    isPlaying,
  } = state;

  const sliderIncreased = sliderCarbonDioxide > equilibriumCarbonDioxide;
  const sliderDecreased = sliderCarbonDioxide < equilibriumCarbonDioxide;

  const resetArrows = (): void => setArrows({ ...DEFAULT_ARROWS });

  useEffect(() => {
    const netIntervals = intervalCount - disequilibriumCyclesBeginAt;
    const intervalOne = netIntervals <= MOTION_INTERVAL;
    const resetIntervalOne =
      netIntervals > MOTION_INTERVAL && netIntervals <= MOTION_INTERVAL + 1;
    const intervalTwo =
      netIntervals > MOTION_INTERVAL + 1 && netIntervals <= 2 * MOTION_INTERVAL;
    const resetIntervalTwo =
      netIntervals > 2 * MOTION_INTERVAL &&
      netIntervals <= 2 * MOTION_INTERVAL + 1;
    const intervalThree =
      netIntervals > 2 * MOTION_INTERVAL + 1 &&
      netIntervals < 3 * MOTION_INTERVAL;

    if (isPlaying) {
      if (intervalOne) {
        if (sliderIncreased) {
          setArrows({ ...DEFAULT_ARROWS, top: { down: true, up: false } });
        } else if (sliderDecreased) {
          setArrows({ ...DEFAULT_ARROWS, bottom: { down: false, up: true } });
          if (netIntervals === MOTION_INTERVAL / 2) {
            dispatch(setEquilibriumCarbonDioxide(sliderCarbonDioxide));
          }
        }
      } else if (resetIntervalOne) {
        resetArrows();
      } else if (intervalTwo) {
        setArrows({
          ...DEFAULT_ARROWS,
          middle: { down: sliderIncreased, up: sliderDecreased },
        });
      } else if (resetIntervalTwo) {
        resetArrows();
      } else if (intervalThree) {
        if (sliderIncreased) {
          setArrows({ ...DEFAULT_ARROWS, bottom: { down: true, up: false } });
          if (netIntervals === MOTION_INTERVAL * 2 + MOTION_INTERVAL / 2) {
            dispatch(setEquilibriumCarbonDioxide(sliderCarbonDioxide));
          }
        } else if (sliderDecreased) {
          setArrows({ ...DEFAULT_ARROWS, top: { down: false, up: true } });
        }
      } else {
        resetArrows();
      }
    }
  }, [
    sliderIncreased,
    sliderDecreased,
    isPlaying,
    intervalCount,
    disequilibriumCyclesBeginAt,
    arrows,
    dispatch,
    sliderCarbonDioxide,
  ]);

  return <MoleculeCountTable arrowsState={arrows} />;
};

export default ArrowsStateManager;
