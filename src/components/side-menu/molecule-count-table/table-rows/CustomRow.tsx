import { useContext } from 'react';

import { Box, Typography } from '@mui/material';

import { RESPONSIVE_CAPTION_STYLES } from '@/constants/css';
import {
  HYDROGEN_BOX_BORDER,
  TABLE_ACTIVE_ANIMATION,
} from '@/constants/side-menu';
import { AppSettingsContext } from '@/contexts/AppSettingsProvider';
import { AllArrowsState } from '@/utils/molecules/types';

interface Props {
  arrowsState: AllArrowsState;
  leftCount: number;
  rightCount: number;
}

const rowContainer = { display: 'flex' };
const leftContainer = {
  width: '50%',
  display: 'flex',
  justifyContent: 'flex-end',
  border: '1px solid grey',
};
const rightContainer = {
  width: '50%',
  display: 'flex',
  alignItems: 'center',
  border: '1px solid grey',
};
const count = {
  width: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  ...RESPONSIVE_CAPTION_STYLES,
};

const CustomRow = ({
  arrowsState,
  leftCount,
  rightCount,
}: Props): JSX.Element => {
  const { state } = useContext(AppSettingsContext);
  const { showScale } = state;
  const { bottom } = arrowsState;
  const isActive = bottom.down || bottom.up;
  const blink = isActive ? TABLE_ACTIVE_ANIMATION : null;
  const imgLeft = { width: '50%', borderLeft: '1px solid grey', ...blink };
  const imgRight = { width: '50%', borderRight: '1px solid grey', ...blink };

  return (
    <Box sx={rowContainer}>
      <Box sx={leftContainer}>
        <Typography sx={count}>{leftCount}</Typography>
        <img alt="hco3" src="hco3.png" style={imgLeft} />
      </Box>
      <Box
        sx={{
          ...rightContainer,
          border: showScale ? HYDROGEN_BOX_BORDER : '1px solid grey',
        }}
      >
        <img alt="h" src="h.png" style={imgRight} />
        <Typography sx={count}>{rightCount}</Typography>
      </Box>
    </Box>
  );
};

export default CustomRow;
