import { useContext, useEffect, useRef, useState } from 'react';

import { Tune } from '@mui/icons-material';
import { Fab, Tooltip } from '@mui/material';

import { setDimensions } from '@/actions/app-settings';
import Canvas from '@/components/canvas/Canvas';
import SideMenu from '@/components/side-menu/SideMenu';
import { BUILDER_VIEW_CY } from '@/config/selectors';
import { CANVAS_WIDTH } from '@/constants/canvas';
import { AppSettingsContext } from '@/contexts/AppSettingsProvider';

const openSideMenuFabStyles = {
  right: 5,
  top: 5,
  position: 'absolute',
  zIndex: 99999,
};

const BuilderView = (): JSX.Element => {
  const { dispatch } = useContext(AppSettingsContext);
  const divRef = useRef<HTMLDivElement>(null);
  const [showSideMenu, setShowSideMenu] = useState(true);

  useEffect(() => {
    const checkSize = (): void => {
      const stageWidth = divRef.current?.offsetWidth || 0;
      const stageHeight = divRef.current?.offsetHeight || 0;
      dispatch(
        setDimensions({
          width: showSideMenu ? stageWidth * CANVAS_WIDTH : stageWidth,
          height: stageHeight,
        }),
      );
    };
    const resizeObserver = new ResizeObserver(() => {
      checkSize();
    });
    const mainContainer = document.querySelector('#container');
    if (mainContainer) {
      resizeObserver.observe(mainContainer);
    }
    checkSize();
  }, [dispatch, showSideMenu]);

  return (
    <div
      data-cy={BUILDER_VIEW_CY}
      ref={divRef}
      id="container"
      style={{ height: '100vh', width: '100vw', display: 'flex' }}
    >
      <div>
        <Canvas />
        {showSideMenu && (
          <SideMenu
            showSideMenu={showSideMenu}
            setShowSideMenu={setShowSideMenu}
          />
        )}
        {!showSideMenu && (
          <Tooltip title="Open side menu" placement="left">
            <Fab
              sx={openSideMenuFabStyles}
              color="primary"
              onClick={() => setShowSideMenu(true)}
            >
              <Tune />
            </Fab>
          </Tooltip>
        )}
      </div>
    </div>
  );
};

export default BuilderView;
