import { Dispatch, SetStateAction, useState } from 'react';

import { Box, Drawer, Typography } from '@mui/material';

import CarbonDioxideSlider from './CarbonDioxideSlider';
import Controls from './Controls';
import CustomDivider from './CustomDivider';
import CustomSwitch from './CustomSwitch';
import UnitsSwitch from './UnitsSwitch';

interface Props {
  showSideMenu: boolean;
  setShowSideMenu: Dispatch<SetStateAction<boolean>>;
}

const containerStyles = { height: '100%', width: '100%' };
const headingStyles = { width: '90%', margin: '1em auto' };

const SideMenu = ({ showSideMenu, setShowSideMenu }: Props): JSX.Element => {
  const [fluxesChecked, setFluxesChecked] = useState(false);
  const [carbonicAcidChecked, setCarbonicAcidChecked] = useState(false);
  const [dissociationChecked, setDissociationChecked] = useState(false);

  return (
    <Drawer
      open={showSideMenu}
      anchor="right"
      variant="persistent"
      PaperProps={{ style: { width: '25vw' } }}
    >
      <Box sx={containerStyles}>
        <Controls setShowSideMenu={setShowSideMenu} />
        <CustomDivider />
        <UnitsSwitch />
        <CarbonDioxideSlider />
        <CustomSwitch
          label="Show Diffusion Arrows"
          isChecked={fluxesChecked}
          setIsChecked={setFluxesChecked}
        />
        <CustomDivider />
        <Typography variant="body2" fontWeight={600} sx={headingStyles}>
          Equations
        </Typography>
        <CustomSwitch
          label="Carbonic Acid Formation"
          isChecked={carbonicAcidChecked}
          setIsChecked={setCarbonicAcidChecked}
        />
        <CustomSwitch
          label="Carbonic Acid Dissociation"
          isChecked={dissociationChecked}
          setIsChecked={setDissociationChecked}
        />
      </Box>
    </Drawer>
  );
};

export default SideMenu;
