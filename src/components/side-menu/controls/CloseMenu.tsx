import { Dispatch, SetStateAction } from 'react';

import { ChevronRight } from '@mui/icons-material';
import { IconButton, Tooltip } from '@mui/material';

interface Props {
  setShowSideMenu: Dispatch<SetStateAction<boolean>>;
}

const styles = { fontSize: '1em' };

const CloseMenu = ({ setShowSideMenu }: Props): JSX.Element => (
  <Tooltip title="Close side menu" placement="right">
    <IconButton onClick={() => setShowSideMenu(false)}>
      <ChevronRight sx={styles} />
    </IconButton>
  </Tooltip>
);

export default CloseMenu;
