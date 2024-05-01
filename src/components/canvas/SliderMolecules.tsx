import { Group } from 'react-konva';

import ActiveSliderMolecules from './slider-molecules/ActiveSliderMolecules';
import StaticSliderMolecules from './slider-molecules/StaticSliderMolecules';

const SliderMolecules = (): JSX.Element => (
  <Group>
    <StaticSliderMolecules />
    <ActiveSliderMolecules />
  </Group>
);

export default SliderMolecules;
