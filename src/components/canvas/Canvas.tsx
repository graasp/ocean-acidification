import { Layer, Stage } from 'react-konva';

import ExchangeCircle from './ExchangeCircle';
import PHScale from './PHScale';
import ReefBlocker from './ReefBlocker';
import ReefGroup from './ReefGroup';
import Sea from './Sea';
import Sky from './Sky';

interface Props {
  width: number;
  height: number;
}

const Canvas = ({ width, height }: Props): JSX.Element => (
  <Stage width={width} height={height}>
    <Layer>
      <Sea width={width} height={height} />
      <Sky width={width} height={height} />
      <ExchangeCircle width={width} height={height} />
      <ReefGroup width={width} height={height} />
      <ReefBlocker width={width} height={height} />
      <PHScale width={width} height={height} />
    </Layer>
  </Stage>
);

export default Canvas;
