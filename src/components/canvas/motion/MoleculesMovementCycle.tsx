import { Group } from 'react-konva';

import { Cycle } from '@/utils/molecules/types';

import CarbonDioxideMigration from './CarbonDioxideMigration';
import CarbonicAcidDissociation from './CarbonicAcidDissociation';
import CarbonicAcidFormation from './CarbonicAcidFormation';

interface Props {
  intervals: number[];
  cycle: Cycle;
  reverse: boolean;
}

const MoleculesMovementCycle = ({
  intervals,
  cycle,
  reverse,
}: Props): JSX.Element => {
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
        reverse={reverse}
      />
      <CarbonicAcidFormation
        beginsAfter={intervals[1]}
        molecules={carbonicAcidFormation}
        reverse={reverse}
      />
      <CarbonicAcidDissociation
        beginsAfter={intervals[2]}
        molecules={carbonicAcidDissociation}
        reverse={reverse}
      />
      <CarbonicAcidDissociation
        beginsAfter={intervals[3]}
        molecules={reverseDissociation}
        reverse={!reverse}
      />
      <CarbonicAcidFormation
        beginsAfter={intervals[4]}
        molecules={reverseFormation}
        reverse={!reverse}
      />
      <CarbonDioxideMigration
        beginsAfter={intervals[5]}
        molecules={reverseMigration}
        reverse={reverse}
      />
    </Group>
  );
};

export default MoleculesMovementCycle;
