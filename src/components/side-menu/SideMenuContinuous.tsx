import { useContext, useState } from 'react';

import { AddCircleOutline, RemoveCircleOutline } from '@mui/icons-material';
import { Box, IconButton, Typography } from '@mui/material';

import { decrementReefHoles, incrementReefHoles } from '@/actions/app-settings';
import { AppSettingsContext } from '@/contexts/AppSettingsProvider';

import CarbonDioxideSlider from './CarbonDioxideSlider';
import CustomDivider from './CustomDivider';
import CustomSwitch from './CustomSwitch';
import TwoSidedSwitch from './TwoSidedSwitch';
import MoleculeCountTable from './molecule-count-table/MoleculeCountTable';

const headingStyles = { width: '90%', margin: '1em auto' };

const SideMenuContinuous = (): JSX.Element => {
  const { dispatch } = useContext(AppSettingsContext);
  const [fluxesChecked, setFluxesChecked] = useState(false);
  const [carbonicAcidChecked, setCarbonicAcidChecked] = useState(false);
  const [dissociationChecked, setDissociationChecked] = useState(false);
  const [unitsPh, setUnitsPh] = useState(true);

  return (
    <Box>
      <TwoSidedSwitch
        leftLabel="pH"
        rightLabel="Concentration"
        isChecked={!unitsPh}
        setIsChecked={setUnitsPh}
        disabled={false}
      />
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
  );
};

export default SideMenuContinuous;
