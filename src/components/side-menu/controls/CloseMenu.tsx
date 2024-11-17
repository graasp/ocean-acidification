import { Dispatch, SetStateAction } from 'react';

import { ChevronRight } from '@mui/icons-material';
import { IconButton, Tooltip } from '@mui/material';

import { t } from 'i18next';

import { RESPONSIVE_SIDE_BUTTON_STYLES } from '@/constants/css';

interface Props {
  setShowSideMenu: Dispatch<SetStateAction<boolean>>;
}

const CloseMenu = ({ setShowSideMenu }: Props): JSX.Element => (
  <Tooltip title={t('Close side menu')} placement="right">
    <IconButton onClick={() => setShowSideMenu(false)}>
      <ChevronRight sx={{ ...RESPONSIVE_SIDE_BUTTON_STYLES }} />
    </IconButton>
  </Tooltip>
);

export default CloseMenu;
