import { Group } from 'react-konva';

import StaticBicarbonates from './StaticBicarbonates';
import StaticHydrogens from './StaticHydrogens';
import StaticWaters from './StaticWaters';

interface Props {
  seaWidth: number;
  seaHeight: number;
}

const SequentialModeStaticMolecules = ({
  seaWidth,
  seaHeight,
}: Props): JSX.Element => (
  <Group>
    <StaticWaters width={seaWidth} height={seaHeight} />
    <StaticHydrogens width={seaWidth} height={seaHeight} />
    <StaticBicarbonates width={seaWidth} height={seaHeight} />
  </Group>
);

export default SequentialModeStaticMolecules;
