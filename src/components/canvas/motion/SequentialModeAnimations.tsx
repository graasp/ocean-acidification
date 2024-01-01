import { Group } from 'react-konva';

import CarbonDioxideMigration from './CarbonDioxideMigration';
import CarbonicAcidDissociation from './CarbonicAcidDissociation';
import CarbonicAcidFormation from './CarbonicAcidFormation';
import ReverseCarbonDioxideMigration from './ReverseCarbonDioxideMigration';
import ReverseDissociation from './ReverseDissociation';
import ReverseFormation from './ReverseFormation';

const SequentialModeAnimations = (): JSX.Element => (
  <Group>
    <CarbonicAcidFormation />
    <CarbonicAcidDissociation />
    <CarbonDioxideMigration />
    <ReverseDissociation />
    <ReverseFormation />
    <ReverseCarbonDioxideMigration />
  </Group>
);

export default SequentialModeAnimations;
