/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from 'react';
import ReactJoyride, { ACTIONS, EVENTS, STATUS } from 'react-joyride';

import { t } from 'i18next';

import { TRUE } from '@/constants/strings';

interface Props {
  tourState: any;
  setTourState: any;
  tourTaken: string;
}

const styles = {
  buttonBack: {
    color: '#5050d2',
    fontSize: '0.95em',
  },
  options: {
    zIndex: 2000,
  },
  tooltip: {
    fontSize: '0.95em',
  },
  buttonNext: {
    backgroundColor: '#5050d2',
    fontSize: '0.95em',
  },
};

const Tour = ({ tourState, setTourState, tourTaken }: Props): JSX.Element => {
  const { run, continuous, stepIndex, steps } = tourState;

  useEffect(() => {
    if (!localStorage.getItem(tourTaken)) {
      setTourState({ ...tourState, run: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tourTaken]);

  const handleTourNavigation = (joyrideData: any): void => {
    const { action, index, type, status } = joyrideData;
    if (
      action === ACTIONS.CLOSE ||
      (status === STATUS.SKIPPED && tourState.run) ||
      status === STATUS.FINISHED
    ) {
      setTourState({ ...tourState, run: false });
      localStorage.setItem(tourTaken, TRUE);
    } else if (type === EVENTS.STEP_AFTER || type === EVENTS.TARGET_NOT_FOUND) {
      setTourState({
        ...tourState,
        stepIndex: index + (action === ACTIONS.PREV ? -1 : 1),
      });
    }
  };

  return (
    <ReactJoyride
      run={run}
      continuous={continuous}
      stepIndex={stepIndex}
      steps={steps}
      callback={handleTourNavigation}
      showSkipButton
      styles={styles}
      locale={{
        next: t('Next'),
        back: t('Back'),
        skip: t('Skip'),
        last: t('End tour'),
      }}
    />
  );
};

export default Tour;
