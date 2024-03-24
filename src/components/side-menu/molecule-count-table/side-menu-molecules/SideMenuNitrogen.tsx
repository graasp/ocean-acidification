import { NITROGEN_FILL, NITROGEN_RADIUS } from '@/constants/side-menu';

import SideMenuAtom from './SideMenuAtom';

interface Props {
  addMarginLeft?: boolean;
}

const SideMenuNitrogen = ({ addMarginLeft }: Props): JSX.Element => (
  <SideMenuAtom
    radius={NITROGEN_RADIUS}
    color={NITROGEN_FILL}
    addMarginLeft={addMarginLeft}
  />
);

export default SideMenuNitrogen;
