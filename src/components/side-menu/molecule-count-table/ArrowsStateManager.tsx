import { useContext, useEffect, useState } from 'react';

import {
  setEquilibriumCarbonDioxide,
  setPHCarbonDioxide,
} from '@/actions/app-settings';
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
    carbonDioxideChange,
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

    const deprotonationAt = MOTION_INTERVAL * 2 + MOTION_INTERVAL / 2;

    if (isPlaying) {
      if (intervalOne) {
        if (sliderIncreased) {
          setArrows({ ...DEFAULT_ARROWS, top: { down: true, up: false } });
        } else if (sliderDecreased) {
          setArrows({ ...DEFAULT_ARROWS, bottom: { down: false, up: true } });
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
        } else if (sliderDecreased) {
          setArrows({ ...DEFAULT_ARROWS, top: { down: false, up: true } });
        }
        if (netIntervals >= deprotonationAt) {
          if (netIntervals === deprotonationAt) {
            dispatch(setEquilibriumCarbonDioxide(sliderCarbonDioxide));
          }
          const movePerInterval = carbonDioxideChange / (MOTION_INTERVAL / 2);
          dispatch(
            setPHCarbonDioxide(
              sliderCarbonDioxide -
                carbonDioxideChange +
                movePerInterval * (netIntervals + 1 - deprotonationAt),
            ),
          );
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
    carbonDioxideChange,
  ]);

  return <MoleculeCountTable arrowsState={arrows} />;
};

export default ArrowsStateManager;
