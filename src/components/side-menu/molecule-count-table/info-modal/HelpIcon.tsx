import HelpIcon from '@mui/icons-material/Help';

import { PRIMARY } from '@/constants/strings';

import AirGasesInfo from './AirGasesInfo';
import HtmlTooltip from './HtmlTooltip';

const styles = { fontSize: '1em' };

const CustomHelpIcon = (): JSX.Element => (
  <HtmlTooltip title={<AirGasesInfo />}>
    <HelpIcon color={PRIMARY} sx={styles} />
  </HtmlTooltip>
);

export default CustomHelpIcon;
