import { useContext, useState } from 'react';

import { Tune } from '@mui/icons-material';
import { Fab, Tooltip } from '@mui/material';

import { t } from 'i18next';

import Canvas from '@/components/canvas/Canvas';
import SideMenuContinuous from '@/components/side-menu/SideMenuContinuous';
import SideMenuSequential from '@/components/side-menu/SideMenuSequential';
import { BUILDER_VIEW_CY } from '@/config/selectors';
import { SEQUENTIAL } from '@/constants/strings';
import { AppSettingsContext } from '@/contexts/AppSettingsProvider';

const openSideMenuFab = {
  right: 5,
  top: 5,
  position: 'absolute',
  zIndex: 99999,
};

const BuilderView = (): JSX.Element => {
  const [showSideMenu, setShowSideMenu] = useState(true);
  const { state } = useContext(AppSettingsContext);
  const { mode } = state;
  const modeSequential = mode === SEQUENTIAL;

  return (
    <div data-cy={BUILDER_VIEW_CY} style={{ height: '100%', display: 'flex' }}>
      {modeSequential ? (
        <SideMenuSequential
          showSideMenu={showSideMenu}
          setShowSideMenu={setShowSideMenu}
          modeSequential={modeSequential}
        />
      ) : (
        <SideMenuContinuous
          showSideMenu={showSideMenu}
          setShowSideMenu={setShowSideMenu}
          modeSequential={modeSequential}
        />
      )}
      <Canvas showSideMenu={showSideMenu} />
      {!showSideMenu && (
        <Tooltip title={t('Open side menu')} placement="left">
          <Fab
            sx={openSideMenuFab}
            color="primary"
            onClick={() => setShowSideMenu(true)}
          >
            <Tune />
          </Fab>
        </Tooltip>
      )}
    </div>
  );
};

export default BuilderView;
