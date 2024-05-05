import { AllArrowsState } from '@/utils/molecules/types';

import SideMenuCarbonDioxide from '../side-menu-molecules/SideMenuCarbonDioxide';
import Row from './Row';

interface Props {
  arrowsState: AllArrowsState;
  count: number;
}

const CarbonDioxideSky = ({ arrowsState, count }: Props): JSX.Element => {
  const { top } = arrowsState;
  const isActive = top.down || top.up;

  return (
    <Row
      leftContent={<SideMenuCarbonDioxide isSky isActive={isActive} />}
      rightContent={count}
    />
  );
};

export default CarbonDioxideSky;
