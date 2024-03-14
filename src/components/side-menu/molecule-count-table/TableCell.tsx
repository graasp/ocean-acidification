import { Typography } from '@mui/material';

interface Props {
  content: number | JSX.Element | undefined;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  customStyle: any;
}

const style = { display: 'flex', alignItems: 'center' };

const TableCell = ({ content, customStyle }: Props): JSX.Element => (
  <Typography variant="caption" sx={style} style={{ ...customStyle }}>
    {content}
  </Typography>
);

export default TableCell;
