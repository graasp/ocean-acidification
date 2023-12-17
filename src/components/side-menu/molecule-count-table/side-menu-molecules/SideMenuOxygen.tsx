import { OXYGEN_FILL } from '@/constants/canvas';
import { OXYGEN_RADIUS } from '@/constants/side-menu';

import SideMenuAtom from './SideMenuAtom';

const SideMenuOxygen = (): JSX.Element => (
  <SideMenuAtom radius={OXYGEN_RADIUS} color={OXYGEN_FILL} />
);

export default SideMenuOxygen;
