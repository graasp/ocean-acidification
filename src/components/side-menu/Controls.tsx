import { Dispatch, SetStateAction } from 'react';

import {
  ChevronRight,
  Info,
  PlayCircleOutline,
  RotateLeft,
  SlowMotionVideo,
} from '@mui/icons-material';
import { Box, IconButton, Tooltip } from '@mui/material';
import { blue, green, orange } from '@mui/material/colors';

interface Props {
  setShowSideMenu: Dispatch<SetStateAction<boolean>>;
}

const containerStyles = {
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '1em',
};
const leftContainerStyles = {
  width: '20%',
  display: 'flex',
  alignItems: 'center',
};
const rightContainerStyles = {
  width: '20%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
};
const centerContainerStyles = {
  width: '60%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};
const closeButtonStyles = { fontSize: '1em' };
const playButtonStyles = { fontSize: '2em', color: green[800] };
const showMotionButtonStyles = { fontSize: '2em', color: blue[800] };
const undoButtonStyles = { fontSize: '2em', color: orange[800] };
const infoButtonStyles = { fontSize: '0.9em' };

const Controls = ({ setShowSideMenu }: Props): JSX.Element => (
  <Box sx={containerStyles}>
    <Box sx={leftContainerStyles}>
      <Tooltip title="Close side menu" placement="right">
        <IconButton onClick={() => setShowSideMenu(false)}>
          <ChevronRight sx={closeButtonStyles} />
        </IconButton>
      </Tooltip>
    </Box>
    <Box sx={centerContainerStyles}>
      <Tooltip title="Play next step">
        <IconButton>
          <SlowMotionVideo sx={showMotionButtonStyles} />
        </IconButton>
      </Tooltip>
      <Tooltip title="Play">
        <IconButton>
          <PlayCircleOutline sx={playButtonStyles} />
        </IconButton>
      </Tooltip>
      <Tooltip title="Reset">
        <IconButton>
          <RotateLeft sx={undoButtonStyles} />
        </IconButton>
      </Tooltip>
    </Box>
    <Box sx={rightContainerStyles}>
      <Tooltip title="Start tour" placement="left">
        <IconButton>
          <Info color="primary" sx={infoButtonStyles} />
        </IconButton>
      </Tooltip>
    </Box>
  </Box>
);

export default Controls;
