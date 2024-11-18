import { AllArrowsState, MoleculeCounts } from '@/utils/molecules/types';

import CarbonDioxideSky from './CarbonDioxideSky';
import CarbonDioxideWater from './CarbonDioxideWater';
import CarbonicAcid from './CarbonicAcid';
import CustomRow from './CustomRow';

interface Props {
  arrowsState: AllArrowsState;
  moleculesCount: MoleculeCounts;
}

const AllRows = ({ arrowsState, moleculesCount }: Props): JSX.Element => {
  const { co2Air, co2Water, carbonicAcid, bicarbonate, hydrogen } =
    moleculesCount;

  return (
    <>
      <CarbonDioxideSky arrowsState={arrowsState} count={co2Air} />
      <CarbonDioxideWater arrowsState={arrowsState} count={co2Water} />
      <CarbonicAcid arrowsState={arrowsState} count={carbonicAcid} />
      <CustomRow
        arrowsState={arrowsState}
        leftCount={bicarbonate}
        rightCount={hydrogen}
      />
    </>
  );
};

export default AllRows;
