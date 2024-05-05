import { Group } from 'react-konva';

import StaticCarbonDioxides from './ActiveMolecules';
import ActiveMolecules from './StaticCarbonDioxides';

const SliderMolecules = (): JSX.Element => (
  <Group>
    <StaticCarbonDioxides />
    <ActiveMolecules />
  </Group>
);

export default SliderMolecules;
