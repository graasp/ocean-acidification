import { useContext } from 'react';
import { Shape } from 'react-konva';

import {
  SPOTLIGHT_BACKGROUND,
  SPOTLIGHT_COORDINATES,
  SPOTLIGHT_HEIGHT,
  SPOTLIGHT_OPACITY,
  SPOTLIGHT_WIDTH,
} from '@/constants/motion/spotlight';
import { AppSettingsContext } from '@/contexts/AppSettingsProvider';
import { createRectangle } from '@/utils/canvas';

const Spotlight = (): JSX.Element | null => {
  const { state } = useContext(AppSettingsContext);
  const { dimensions, animationInMotion, animationIndex } = state;
  const { width, height } = dimensions;
  const { x, y } =
    SPOTLIGHT_COORDINATES[animationIndex % SPOTLIGHT_COORDINATES.length];

  const spotWidth = SPOTLIGHT_WIDTH * width;
  const spotHeight = SPOTLIGHT_HEIGHT * height;

  return animationInMotion ? (
    <Shape
      width={width}
      height={height}
      fill={SPOTLIGHT_BACKGROUND}
      opacity={SPOTLIGHT_OPACITY}
      sceneFunc={(ctx, shape) => {
        ctx.beginPath();
        createRectangle(ctx, 0, 0, width, height, 1);
        createRectangle(ctx, x * width, y * height, spotWidth, spotHeight, -1);
        ctx.fillStrokeShape(shape);
      }}
      listening={false}
    />
  ) : null;
};

export default Spotlight;
