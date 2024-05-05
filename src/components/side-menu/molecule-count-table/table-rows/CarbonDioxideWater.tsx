import { AllArrowsState } from '@/utils/molecules/types';

import SideMenuCarbonDioxide from '../side-menu-molecules/SideMenuCarbonDioxide';
import Row from './Row';

interface Props {
  arrowsState: AllArrowsState;
  count: number;
}

const CarbonDioxideWater = ({ arrowsState, count }: Props): JSX.Element => {
  const { top, middle } = arrowsState;
  const isActive = top.down || top.up || middle.down || middle.up;

  return (
    <Row
      leftContent={<SideMenuCarbonDioxide isSky={false} isActive={isActive} />}
      rightContent={count}
    />
  );
};

export default CarbonDioxideWater;
