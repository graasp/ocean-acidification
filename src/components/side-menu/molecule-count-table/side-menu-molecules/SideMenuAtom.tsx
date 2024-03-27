interface Props {
  radius: number;
  color: string;
  addMarginLeft?: boolean;
}

const SideMenuAtom = ({ radius, color, addMarginLeft }: Props): JSX.Element => (
  <div
    style={{
      backgroundColor: color,
      width: radius,
      height: radius,
      borderRadius: '50%',
      zIndex: 1,
      marginLeft: addMarginLeft ? '-2px' : 0,
    }}
  />
);

export default SideMenuAtom;
