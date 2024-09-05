import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';

const HtmlTooltip = styled(
  ({ children, className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} placement="left">
      {children}
    </Tooltip>
  ),
)(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#f5f5f9',
    color: 'rgba(0, 0, 0, 0.87)',
    fontSize: theme.typography.pxToRem(12),
    border: '1px solid #dadde9',
    width: '275px',
  },
}));

export default HtmlTooltip;
