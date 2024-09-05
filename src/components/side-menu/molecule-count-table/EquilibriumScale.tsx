import { useContext } from 'react';

import { Box, Tooltip } from '@mui/material';

import { t } from 'i18next';

import { CYCLES } from '@/constants/motion/continuous-mode-cycles';
import {
  EQ_SCALE_COLOR_DISEQ,
  EQ_SCALE_COLOR_EQ,
  EQ_SCALE_EMOJI_DISEQ,
  EQ_SCALE_EMOJI_EQ,
  EQ_SCALE_ROTATE_DISEQ,
  EQ_SCALE_ROTATE_EQ,
} from '@/constants/side-menu';
import { IN_EQ, NOT_IN_EQ, TOP } from '@/constants/strings';
import { AppSettingsContext } from '@/contexts/AppSettingsProvider';
import { countContinuousCycles } from '@/utils/table-counts/continuous-cycles';

const container = {
  marginRight: '10px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};
const emojiStyle = { fontSize: '12px', userSelect: 'none' };
const horizontalStrip = {
  width: '50px',
  borderWidth: '1px',
  borderStyle: 'solid',
};
const base = {
  height: '0',
  width: '0',
  borderLeft: '7.5px solid transparent',
  borderRight: '7.5px solid transparent',
  borderBottomWidth: '12.5px',
  borderBottomStyle: 'solid',
};

const EquilibriumScale = (): JSX.Element => {
  const { state } = useContext(AppSettingsContext);
  const { sliderCarbonDioxide, equilibriumCarbonDioxide, intervalCount } =
    state;

  const systemInEquilibrium = sliderCarbonDioxide === equilibriumCarbonDioxide;
  const { co2Air: initialCo2Air } = countContinuousCycles(CYCLES, 0);
  const { co2Air: currentCo2Air } = countContinuousCycles(
    CYCLES,
    intervalCount,
  );

  let temporaryDisequilibrium = false;
  if (systemInEquilibrium && initialCo2Air !== currentCo2Air) {
    temporaryDisequilibrium = true;
  }
  const inDisequilibrium = !systemInEquilibrium || temporaryDisequilibrium;

  const tooltipTitle = inDisequilibrium ? t(NOT_IN_EQ) : t(IN_EQ);
  const rotate = inDisequilibrium ? EQ_SCALE_ROTATE_DISEQ : EQ_SCALE_ROTATE_EQ;
  const emoji = inDisequilibrium ? EQ_SCALE_EMOJI_DISEQ : EQ_SCALE_EMOJI_EQ;
  const color = inDisequilibrium ? EQ_SCALE_COLOR_DISEQ : EQ_SCALE_COLOR_EQ;

  return (
    <Tooltip title={tooltipTitle} placement={TOP}>
      <Box sx={container} className="continuous-mode-4">
        <Box sx={emojiStyle}>{emoji}</Box>
        <Box sx={{ ...horizontalStrip, rotate, borderColor: color }} />
        <Box sx={{ ...base, borderBottomColor: color }} />
      </Box>
    </Tooltip>
  );
};

export default EquilibriumScale;
