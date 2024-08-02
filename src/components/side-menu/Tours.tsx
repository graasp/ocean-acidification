import { useState } from 'react';

import { Box } from '@mui/material';

import { CONTINUOUS_TOUR_INITIAL_STATE } from '@/config/continuous-mode-tour-steps';
import { SEQUENTIAL_TOUR_INITIAL_STATE } from '@/config/sequential-mode-tour-steps';
import {
  CONTINUOUS_MODE_TOUR_TAKEN,
  SEQUENTIAL_MODE_TOUR_TAKEN,
} from '@/constants/strings';

import Tour from './Tour';
import StartTour from './controls/StartTour';

interface Props {
  modeSequential: boolean;
}

const rightContainer = {
  width: '20%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
};

const Tours = ({ modeSequential }: Props): JSX.Element => {
  const [seqTour, setSeqTour] = useState(SEQUENTIAL_TOUR_INITIAL_STATE);
  const [contTour, setContTour] = useState(CONTINUOUS_TOUR_INITIAL_STATE);

  const startTour = (): void => {
    if (modeSequential) {
      setSeqTour({ ...seqTour, stepIndex: 0, run: true });
    } else {
      setContTour({ ...contTour, stepIndex: 0, run: true });
    }
  };

  return (
    <Box sx={rightContainer}>
      {modeSequential ? (
        <Tour
          tourState={seqTour}
          setTourState={setSeqTour}
          tourTaken={SEQUENTIAL_MODE_TOUR_TAKEN}
        />
      ) : (
        <Tour
          tourState={contTour}
          setTourState={setContTour}
          tourTaken={CONTINUOUS_MODE_TOUR_TAKEN}
        />
      )}
      <StartTour startTour={startTour} />
    </Box>
  );
};

export default Tours;
