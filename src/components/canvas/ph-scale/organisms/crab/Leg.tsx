import { Line } from 'react-konva';

import { CRAB_COLOR, LEG_STROKE_WIDTH } from '@/constants/organisms';

interface Props {
  points: number[];
}

const Leg = ({ points }: Props): JSX.Element => (
  <Line stroke={CRAB_COLOR} strokeWidth={LEG_STROKE_WIDTH} points={points} />
);

export default Leg;
