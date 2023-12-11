interface Props {
  radius: number;
  color: string;
  showBorder: boolean;
}

const SideMenuAtom = ({ radius, color, showBorder }: Props): JSX.Element => (
  <div
    style={{
      backgroundColor: color,
      width: radius,
      height: radius,
      borderRadius: '50%',
      border: showBorder ? '1px solid' : 0,
    }}
  />
);

export default SideMenuAtom;
