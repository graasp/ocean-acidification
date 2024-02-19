import { Group } from 'react-konva';

import { Cycle } from '@/utils/molecules/types';

import CarbonDioxideMigration from './CarbonDioxideMigration';
import CarbonicAcidDissociation from './CarbonicAcidDissociation';
import CarbonicAcidFormation from './CarbonicAcidFormation';
import ReverseDissociation from './ReverseDissociation';
import ReverseFormation from './ReverseFormation';

interface Props {
  intervals: number[];
  cycle: Cycle;
}

const MoleculesMovementCycle = ({ intervals, cycle }: Props): JSX.Element => {
  const {
    co2Migration,
    carbonicAcidFormation,
    carbonicAcidDissociation,
    reverseDissociation,
    reverseFormation,
    reverseMigration,
  } = cycle;

  return (
    <Group>
      <CarbonDioxideMigration
        beginsAfter={intervals[0]}
        molecules={co2Migration}
      />
      <CarbonicAcidFormation
        beginsAfter={intervals[1]}
        molecules={carbonicAcidFormation}
      />
      <CarbonicAcidDissociation
        beginsAfter={intervals[2]}
        molecules={carbonicAcidDissociation}
      />
      <ReverseDissociation
        beginsAfter={intervals[3]}
        molecules={reverseDissociation}
      />
      <ReverseFormation
        beginsAfter={intervals[4]}
        molecules={reverseFormation}
      />
      <CarbonDioxideMigration
        beginsAfter={intervals[5]}
        molecules={reverseMigration}
      />
    </Group>
  );
};

export default MoleculesMovementCycle;
