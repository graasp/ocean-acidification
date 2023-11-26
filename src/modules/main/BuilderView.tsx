import { useEffect, useRef, useState } from 'react';

import { Tune } from '@mui/icons-material';
import { Fab, Tooltip } from '@mui/material';

import Canvas from '@/components/canvas/Canvas';
import SideMenu from '@/components/side-menu/SideMenu';
import { BUILDER_VIEW_CY } from '@/config/selectors';
import { CANVAS_WIDTH } from '@/constants/canvas';
import AppSettingsProvider from '@/contexts/AppSettingsProvider';

const openSideMenuFabStyles = {
  right: 5,
  top: 5,
  position: 'absolute',
  zIndex: 99999,
};

const BuilderView = (): JSX.Element => {
  const divRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
  });
  const [showSideMenu, setShowSideMenu] = useState(true);

  useEffect(() => {
    const checkSize = (): void => {
      const stageWidth = divRef.current?.offsetWidth || 0;
      const stageHeight = divRef.current?.offsetHeight || 0;
      setDimensions({
        width: stageWidth,
        height: stageHeight,
      });
    };
    const resizeObserver = new ResizeObserver(() => {
      checkSize();
    });
    const mainContainer = document.querySelector('#container');
    if (mainContainer) {
      resizeObserver.observe(mainContainer);
    }
    checkSize();
  }, []);

  return (
    <div
      data-cy={BUILDER_VIEW_CY}
      ref={divRef}
      id="container"
      style={{ height: '100vh', width: '100vw', display: 'flex' }}
    >
      <AppSettingsProvider>
        <Canvas
          width={
            showSideMenu ? dimensions.width * CANVAS_WIDTH : dimensions.width
          }
          height={dimensions.height}
        />
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
      </AppSettingsProvider>
    </div>
  );
};

export default BuilderView;
