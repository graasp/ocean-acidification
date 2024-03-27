import { FULL_CYCLE } from '@/constants/motion/slider-molecules';

import CarbonDioxideCycle from './motion/CarbonDioxideCycle';

const CarbonDioxideCycles = (): JSX.Element => (
  <CarbonDioxideCycle cycle={FULL_CYCLE} beginsAt={0} />
);

export default CarbonDioxideCycles;
