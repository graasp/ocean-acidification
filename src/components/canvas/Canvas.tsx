import { Layer, Stage } from 'react-konva';

import AllMolecules from './AllMolecules';
import ExchangeCircle from './ExchangeCircle';
import PHScale from './PHScale';
import ReefBlocker from './ReefBlocker';
import ReefGroup from './ReefGroup';
import Sea from './Sea';
import Sky from './Sky';
import Water from './Water';

interface Props {
  width: number;
  height: number;
}

const Canvas = ({ width, height }: Props): JSX.Element => (
  <Stage width={width} height={height}>
    <Layer>
      <Sky width={width} height={height} />
      <Sea width={width} height={height} />
      <AllMolecules width={width} height={height} />
      <Water />
      <ExchangeCircle width={width} height={height} />
      <ReefGroup width={width} height={height} />
      <ReefBlocker width={width} height={height} />
      <PHScale width={width} height={height} />
    </Layer>
  </Stage>
);

export default Canvas;
