interface Props {
  radius: number;
  color: string;
}

const SideMenuAtom = ({ radius, color }: Props): JSX.Element => (
  <div
    style={{
      backgroundColor: color,
      width: radius,
      height: radius,
      borderRadius: '50%',
    }}
  />
);

export default SideMenuAtom;
