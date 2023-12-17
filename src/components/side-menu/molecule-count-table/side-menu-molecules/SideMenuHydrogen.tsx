import { HYDROGEN_FILL } from '@/constants/canvas';
import { HYDROGEN_RADIUS } from '@/constants/side-menu';

import SideMenuAtom from './SideMenuAtom';

const SideMenuHydrogen = (): JSX.Element => (
  <SideMenuAtom radius={HYDROGEN_RADIUS} color={HYDROGEN_FILL} />
);

export default SideMenuHydrogen;
