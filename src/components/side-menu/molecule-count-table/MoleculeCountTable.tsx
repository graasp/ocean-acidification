import { useContext } from 'react';

import { Box } from '@mui/material';

import {
  DEFAULT_OPACITY,
  FADED_OPACITY,
  TABLE_HEIGHT,
} from '@/constants/side-menu';
import { AppSettingsContext } from '@/contexts/AppSettingsProvider';

import SideMenuHeader from '../common/SideMenuHeader';
import Row from './Row';
import HydrogenBox from './side-menu-molecules/HydrogenBox';
import SideMenuCarbonDioxide from './side-menu-molecules/SideMenuCarbonDioxide';
import SideMenuCarbonicAcid from './side-menu-molecules/SideMenuCarbonicAcid';
import ArrowsGroup from './table-arrows/ArrowsGroup';

const container = { width: '100%' };
const table = { width: '90%', margin: '0 auto', height: TABLE_HEIGHT };

const MoleculeCountTable = (): JSX.Element => {
  const { state } = useContext(AppSettingsContext);
  const { isPlaying } = state;
  const opacity = isPlaying ? FADED_OPACITY : DEFAULT_OPACITY;

  return (
    <Box sx={container}>
      <SideMenuHeader label="Molecule Counts" showHelpIcon />
      <Box sx={{ ...table, opacity }}>
        <ArrowsGroup />
        <Row leftContent={<SideMenuCarbonDioxide isSky />} rightContent={20} />
        <Row
          leftContent={<SideMenuCarbonDioxide isSky={false} />}
          rightContent={20}
        />
        <Row leftContent={<SideMenuCarbonicAcid />} rightContent={20} />
        <Row
          leftContent={<SideMenuCarbonicAcid isBicarbonate />}
          rightContent={<HydrogenBox />}
          isCustom
          customCountLeft={10}
          customCountRight={10}
        />
      </Box>
    </Box>
  );
};

export default MoleculeCountTable;
