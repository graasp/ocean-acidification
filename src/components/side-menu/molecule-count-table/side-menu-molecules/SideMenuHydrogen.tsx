import { HYDROGEN_FILL } from '@/constants/canvas';
import { HYDROGEN_RADIUS } from '@/constants/side-menu';
import { EMPTY_STRING } from '@/constants/strings';

import SideMenuAtom from './SideMenuAtom';

const defaultProps = {
  isBicarbonate: false,
};

interface Props {
  isBicarbonate?: boolean;
}

const SideMenuHydrogen = ({ isBicarbonate }: Props): JSX.Element => (
  <SideMenuAtom
    radius={HYDROGEN_RADIUS}
    color={!isBicarbonate ? HYDROGEN_FILL : EMPTY_STRING}
  />
);

SideMenuHydrogen.defaultProps = defaultProps;

export default SideMenuHydrogen;
