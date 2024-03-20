import { DISEQUILIBRIUM_CYCLE } from '@/constants/motion/disequilibrium-cycle';

import DisequilibriumCycle from './motion/DisequilibriumCycle';

const DisequilibriumAnimation = (): JSX.Element => (
  <DisequilibriumCycle cycle={DISEQUILIBRIUM_CYCLE} beginsAt={0} />
);

export default DisequilibriumAnimation;
