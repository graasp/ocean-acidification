import { useContext } from 'react';

import HelpIcon from '@mui/icons-material/Help';

import { DISABLED, PRIMARY } from '@/constants/strings';
import { AppSettingsContext } from '@/contexts/AppSettingsProvider';

import AirGasesInfo from './AirGasesInfo';
import HtmlTooltip from './HtmlTooltip';

const styles = { fontSize: '1em' };

const CustomHelpIcon = (): JSX.Element => {
  const { state } = useContext(AppSettingsContext);
  const { isPlaying } = state;
  const disabled = isPlaying;
  const color = disabled ? DISABLED : PRIMARY;

  return (
    <HtmlTooltip title={<AirGasesInfo />}>
      <HelpIcon color={color} sx={styles} />
    </HtmlTooltip>
  );
};

export default CustomHelpIcon;
