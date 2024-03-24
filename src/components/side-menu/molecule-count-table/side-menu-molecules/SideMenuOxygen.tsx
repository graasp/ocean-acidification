import { OXYGEN_FILL } from '@/constants/canvas';
import { OXYGEN_RADIUS } from '@/constants/side-menu';

import SideMenuAtom from './SideMenuAtom';

interface Props {
  addMarginLeft?: boolean;
}

const SideMenuOxygen = ({ addMarginLeft }: Props): JSX.Element => (
  <SideMenuAtom
    radius={OXYGEN_RADIUS}
    color={OXYGEN_FILL}
    addMarginLeft={addMarginLeft}
  />
);

export default SideMenuOxygen;
