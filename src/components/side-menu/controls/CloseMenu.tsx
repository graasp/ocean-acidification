import { Dispatch, SetStateAction } from 'react';

import { ChevronRight } from '@mui/icons-material';
import { IconButton, Tooltip } from '@mui/material';

interface Props {
  setShowSideMenu: Dispatch<SetStateAction<boolean>>;
}

const buttonStyles = { fontSize: '1em' };

const CloseMenu = ({ setShowSideMenu }: Props): JSX.Element => (
  <Tooltip title="Close side menu" placement="right">
    <IconButton onClick={() => setShowSideMenu(false)}>
      <ChevronRight sx={buttonStyles} />
    </IconButton>
  </Tooltip>
);

export default CloseMenu;
