import { useContext } from 'react';
import { Group } from 'react-konva';

import { CLAW_CENTER } from '@/constants/organisms';
import { AppSettingsContext } from '@/contexts/AppSettingsProvider';

import ClawArm from './ClawArm';
import ClawGrabber from './ClawGrabber';

interface Props {
  isLeft: boolean;
}

const Claw = ({ isLeft }: Props): JSX.Element => {
  const { state } = useContext(AppSettingsContext);
  const { dimensions } = state;
  const { height } = dimensions;

  const xSign = isLeft ? 1 : -1;

  return (
    <Group x={xSign * CLAW_CENTER.x * height} y={CLAW_CENTER.y * height}>
      <ClawGrabber isLeft={isLeft} />
      <ClawArm isLeft={isLeft} />
    </Group>
  );
};

export default Claw;
