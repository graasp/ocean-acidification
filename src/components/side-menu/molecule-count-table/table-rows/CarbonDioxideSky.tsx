import { AllArrowsState } from '@/utils/molecules/types';

import Row from './Row';

interface Props {
  arrowsState: AllArrowsState;
  count: number;
}

const CarbonDioxideSky = ({ arrowsState, count }: Props): JSX.Element => {
  const { top } = arrowsState;
  const isActive = top.down || top.up;

  return <Row src="co2air.png" isActive={isActive} count={count} />;
};

export default CarbonDioxideSky;
