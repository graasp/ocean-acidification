import { Dispatch, SetStateAction, useContext, useState } from 'react';

import { AddCircleOutline, RemoveCircleOutline } from '@mui/icons-material';
import { Box, Drawer, IconButton, Typography } from '@mui/material';

import { decrementReefHoles, incrementReefHoles } from '@/actions/app-settings';
import { AppSettingsContext } from '@/contexts/AppSettingsProvider';

import CarbonDioxideSlider from './CarbonDioxideSlider';
import Controls from './Controls';
import CustomDivider from './CustomDivider';
import CustomSwitch from './CustomSwitch';
import UnitsSwitch from './UnitsSwitch';
import MoleculeCountTable from './molecule-count-table/MoleculeCountTable';

interface Props {
  showSideMenu: boolean;
  setShowSideMenu: Dispatch<SetStateAction<boolean>>;
}

const containerStyles = { height: '100%', width: '100%' };
const headingStyles = { width: '90%', margin: '1em auto' };

const SideMenu = ({ showSideMenu, setShowSideMenu }: Props): JSX.Element => {
  const { dispatch } = useContext(AppSettingsContext);
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
        <CustomDivider />
        <MoleculeCountTable />
        {/* For debugging/illustrative purposes; TODO: remove box and its contents below */}
        <Box style={{ float: 'right', paddingTop: 25 }}>
          <IconButton onClick={() => dispatch(incrementReefHoles())}>
            <RemoveCircleOutline style={{ color: 'red', fontSize: 8 }} />
          </IconButton>
          <IconButton onClick={() => dispatch(decrementReefHoles())}>
            <AddCircleOutline style={{ color: 'blue', fontSize: 8 }} />
          </IconButton>
        </Box>
      </Box>
    </Drawer>
  );
};

export default SideMenu;
