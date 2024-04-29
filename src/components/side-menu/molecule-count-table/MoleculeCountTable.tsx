import { useContext } from 'react';

import { Box } from '@mui/material';

import { TABLE_HEIGHT } from '@/constants/side-menu';
import { STATIC_CO2_DISTRIBUTION } from '@/constants/slider-molecules/static-slider-molecules';
import { ALL_CONTINUOUS_CYCLES } from '@/constants/table-counts';
import { AppSettingsContext } from '@/contexts/AppSettingsProvider';
import { computeStaticDistribution } from '@/utils/molecules';
import { AllArrowsState } from '@/utils/molecules/types';
import {
  countAllMolecules,
  countReactiveMolecules,
  countStaticMolecules,
} from '@/utils/table-counts';

import SideMenuHeader from '../common/SideMenuHeader';
import Row from './Row';
import HydrogenBox from './side-menu-molecules/HydrogenBox';
import SideMenuCarbonDioxide from './side-menu-molecules/SideMenuCarbonDioxide';
import SideMenuCarbonicAcid from './side-menu-molecules/SideMenuCarbonicAcid';
import ArrowsGroup from './table-arrows/ArrowsGroup';

const container = { width: '100%' };
const table = { width: '90%', margin: '0 auto', height: TABLE_HEIGHT };

interface Props {
  arrowsState: AllArrowsState;
}

const MoleculeCountTable = ({ arrowsState }: Props): JSX.Element => {
  const { state } = useContext(AppSettingsContext);
  const {
    reactiveMoleculeDistribution,
    sliderCarbonDioxide,
    intervalCount,
    disequilibriumCyclesBeginAt,
  } = state;
  const staticDistribution = computeStaticDistribution(
    STATIC_CO2_DISTRIBUTION,
    sliderCarbonDioxide,
  );

  const { top, middle, bottom } = arrowsState;

  const continuousCyclesCount = countAllMolecules(ALL_CONTINUOUS_CYCLES);
  const reactiveMoleculesCount = countReactiveMolecules(
    reactiveMoleculeDistribution,
    intervalCount,
    disequilibriumCyclesBeginAt,
  );
  const staticMoleculesCount = countStaticMolecules(staticDistribution);

  const allMoleculesCount = countAllMolecules([
    reactiveMoleculesCount,
    continuousCyclesCount,
    staticMoleculesCount,
  ]);

  const { co2Air, co2Water, carbonicAcid, bicarbonate, hydrogen } =
    allMoleculesCount;

  return (
    <Box sx={container}>
      <SideMenuHeader label="Molecule Counts" showHelpIcon />
      <Box sx={table}>
        <ArrowsGroup arrowsState={arrowsState} />
        <Row
          leftContent={
            <SideMenuCarbonDioxide isSky isActive={top.down || top.up} />
          }
          rightContent={co2Air}
        />
        <Row
          leftContent={
            <SideMenuCarbonDioxide
              isSky={false}
              isActive={top.down || top.up || middle.down || middle.up}
            />
          }
          rightContent={co2Water}
        />
        <Row
          leftContent={
            <SideMenuCarbonicAcid
              isActive={middle.down || middle.up || bottom.down || bottom.up}
            />
          }
          rightContent={carbonicAcid}
        />
        <Row
          leftContent={
            <SideMenuCarbonicAcid
              isBicarbonate
              isActive={bottom.down || bottom.up}
            />
          }
          rightContent={<HydrogenBox isActive={bottom.down || bottom.up} />}
          isCustom
          customCountLeft={bicarbonate}
          customCountRight={hydrogen}
        />
      </Box>
    </Box>
  );
};

export default MoleculeCountTable;
