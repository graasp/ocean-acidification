import { Box } from '@mui/material';

import TableCell from '../TableCell';

interface Props {
  leftContent: JSX.Element;
  rightContent: number | JSX.Element;
  isCustom?: boolean;
  customCountLeft?: number;
  customCountRight?: number;
}

const rowContainer = { display: 'flex' };
const container = {
  display: 'flex',
  width: '40%',
  margin: '0 auto',
  border: '1px solid white',
};
const defaultCell = { width: '50%', justifyContent: 'center' };
const leftCustomLabel = { width: '30%', justifyContent: 'flex-end' };
const rightCustomLabel = { width: '30%' };

const Row = ({
  leftContent,
  rightContent,
  isCustom,
  customCountLeft,
  customCountRight,
}: Props): JSX.Element => (
  <Box sx={rowContainer}>
    {isCustom && (
      <TableCell content={customCountLeft} customStyle={leftCustomLabel} />
    )}
    <Box sx={container}>
      <TableCell content={leftContent} customStyle={defaultCell} />
      <TableCell content={rightContent} customStyle={defaultCell} />
    </Box>
    {isCustom && (
      <TableCell content={customCountRight} customStyle={rightCustomLabel} />
    )}
  </Box>
);

Row.defaultProps = { isCustom: false, customCountLeft: 0, customCountRight: 0 };

export default Row;
