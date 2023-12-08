import { CARBON_FILL } from '@/constants/canvas';
import { CARBON_RADIUS } from '@/constants/side-menu';

import SideMenuAtom from './SideMenuAtom';

const SideMenuCarbon = (): JSX.Element => (
  <SideMenuAtom radius={CARBON_RADIUS} color={CARBON_FILL} showBorder={false} />
);

export default SideMenuCarbon;
