import { Group } from 'react-konva';

import CarbonDioxideMigration from './CarbonDioxideMigration';
import CarbonicAcidDissociation from './CarbonicAcidDissociation';
import CarbonicAcidFormation from './CarbonicAcidFormation';
import ReverseCarbonDioxideMigration from './ReverseCarbonDioxideMigration';
import ReverseDissociation from './ReverseDissociation';
import ReverseFormation from './ReverseFormation';

interface Props {
  intervals: number[];
}

const MoleculesMovementCycle = ({ intervals }: Props): JSX.Element => {
  const [intervalOne, intervalTwo, intervalThree, intervalFour, intervalFive] =
    intervals;

  return (
    <Group>
      <CarbonDioxideMigration />
      <CarbonicAcidFormation beginsAfter={intervalOne} />
      <CarbonicAcidDissociation beginsAfter={intervalTwo} />
      <ReverseDissociation beginsAfter={intervalThree} />
      <ReverseFormation beginsAfter={intervalFour} />
      <ReverseCarbonDioxideMigration beginsAfter={intervalFive} />
    </Group>
  );
};

export default MoleculesMovementCycle;
