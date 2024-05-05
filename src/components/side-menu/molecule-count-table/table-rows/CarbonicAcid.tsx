import { AllArrowsState } from '@/utils/molecules/types';

import SideMenuCarbonicAcid from '../side-menu-molecules/SideMenuCarbonicAcid';
import Row from './Row';

interface Props {
  arrowsState: AllArrowsState;
  count: number;
}

const CarbonicAcid = ({ arrowsState, count }: Props): JSX.Element => {
  const { middle, bottom } = arrowsState;
  const isActive = middle.down || middle.up || bottom.down || bottom.up;

  return (
    <Row
      leftContent={<SideMenuCarbonicAcid isActive={isActive} />}
      rightContent={count}
    />
  );
};

export default CarbonicAcid;
