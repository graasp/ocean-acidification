import { LinearProgress, Tooltip } from '@mui/material';

const styles = {
  width: '50%',
  height: '2px',
  backgroundColor: 'white',
  '& .MuiLinearProgress-bar': {
    backgroundColor: '#CC5500',
  },
};

const ProgressBar = (): JSX.Element => (
  <Tooltip title="Stopping animation...">
    <LinearProgress sx={styles} />
  </Tooltip>
);

export default ProgressBar;
