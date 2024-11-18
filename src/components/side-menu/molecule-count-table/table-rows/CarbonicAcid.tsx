import { AllArrowsState } from '@/utils/molecules/types';

import Row from './Row';

interface Props {
  arrowsState: AllArrowsState;
  count: number;
}

const CarbonicAcid = ({ arrowsState, count }: Props): JSX.Element => {
  const { middle, bottom } = arrowsState;
  const isActive = middle.down || middle.up || bottom.down || bottom.up;

  return <Row src="h2co3.png" isActive={isActive} count={count} />;
};

export default CarbonicAcid;
