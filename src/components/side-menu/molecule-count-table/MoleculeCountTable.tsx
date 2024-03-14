import { useContext } from 'react';

import { Box } from '@mui/material';

import { AppSettingsContext } from '@/contexts/AppSettingsProvider';

import SideMenuHeader from '../common/SideMenuHeader';
import Row from './Row';
import HydrogenBox from './side-menu-molecules/HydrogenBox';
import SideMenuCarbonDioxide from './side-menu-molecules/SideMenuCarbonDioxide';
import SideMenuCarbonicAcid from './side-menu-molecules/SideMenuCarbonicAcid';

const container = { width: '100%' };
const table = { width: '90%', margin: '0 auto' };

const MoleculeCountTable = (): JSX.Element => {
  const { state } = useContext(AppSettingsContext);
  const { isPlaying } = state;

  return (
    <Box sx={container}>
      <SideMenuHeader label="Molecule Counts" />
      <Box sx={table}>
        <Row
          leftContent={<SideMenuCarbonDioxide isSky faded={isPlaying} />}
          rightContent={20}
        />
        <Row
          leftContent={
            <SideMenuCarbonDioxide isSky={false} faded={isPlaying} />
          }
          rightContent={20}
        />
        <Row
          leftContent={<SideMenuCarbonicAcid faded={isPlaying} />}
          rightContent={20}
        />
        <Row
          leftContent={<SideMenuCarbonicAcid isBicarbonate faded={isPlaying} />}
          rightContent={<HydrogenBox faded={isPlaying} />}
          isCustom
          customCountLeft={10}
          customCountRight={10}
        />
      </Box>
    </Box>
  );
};

export default MoleculeCountTable;
