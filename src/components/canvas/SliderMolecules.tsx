import { Group } from 'react-konva';

import ReactiveSliderMolecules from './slider-molecules/ReactiveSliderMolecules';
import StaticSliderMolecules from './slider-molecules/StaticSliderMolecules';

const SliderMolecules = (): JSX.Element => (
  <Group>
    <StaticSliderMolecules />
    <ReactiveSliderMolecules />
  </Group>
);

export default SliderMolecules;
