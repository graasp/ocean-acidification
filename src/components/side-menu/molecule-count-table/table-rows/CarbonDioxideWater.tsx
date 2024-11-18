import { AllArrowsState } from '@/utils/molecules/types';

import Row from './Row';

interface Props {
  arrowsState: AllArrowsState;
  count: number;
}

const CarbonDioxideWater = ({ arrowsState, count }: Props): JSX.Element => {
  const { top, middle } = arrowsState;
  const isActive = top.down || top.up || middle.down || middle.up;

  return <Row src="/co2water.png" isActive={isActive} count={count} />;
};

export default CarbonDioxideWater;
