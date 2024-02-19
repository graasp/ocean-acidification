import { Typography } from '@mui/material';

const styles = { width: '90%', margin: '1em auto' };

interface Props {
  label: string | JSX.Element;
}

const SideMenuHeader = ({ label }: Props): JSX.Element => (
  <Typography variant="body2" fontWeight={600} sx={styles}>
    {label}
  </Typography>
);

export default SideMenuHeader;
