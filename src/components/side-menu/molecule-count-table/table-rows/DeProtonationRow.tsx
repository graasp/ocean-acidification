import { AllArrowsState } from '@/utils/molecules/types';

import HydrogenBox from '../side-menu-molecules/HydrogenBox';
import SideMenuCarbonicAcid from '../side-menu-molecules/SideMenuCarbonicAcid';
import Row from './Row';

interface Props {
  arrowsState: AllArrowsState;
  countLeft: number;
  countRight: number;
}

const DeProtonationRow = ({
  arrowsState,
  countLeft,
  countRight,
}: Props): JSX.Element => {
  const { bottom } = arrowsState;
  const isActive = bottom.down || bottom.up;

  return (
    <Row
      leftContent={<SideMenuCarbonicAcid isBicarbonate isActive={isActive} />}
      rightContent={<HydrogenBox isActive={isActive} />}
      isCustom
      customCountLeft={countLeft}
      customCountRight={countRight}
    />
  );
};

export default DeProtonationRow;
