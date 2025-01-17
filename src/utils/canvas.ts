import type { Context } from 'konva/lib/Context';

import {
  REEF_HOLES_BEGIN_X,
  REEF_HOLES_BEGIN_Y,
  REEF_HOLES_END_X,
  REEF_HOLES_END_Y,
  REEF_HOLES_RADII,
  TOTAL_NUM_HOLES,
} from '@/constants/canvas';

import { generateRandomNum } from './molecules';

interface Coordinates {
  x: number;
  y: number;
  size: number;
  switchedOn: boolean;
}

const generateReefHoles = (numHoles: number): Coordinates[] => {
  const reefHoles = [];
  for (let i = 0; i < numHoles; i += 1) {
    reefHoles.push({
      x: generateRandomNum(REEF_HOLES_BEGIN_X, REEF_HOLES_END_X),
      y: generateRandomNum(REEF_HOLES_BEGIN_Y, REEF_HOLES_END_Y),
      size: REEF_HOLES_RADII[
        Math.floor(Math.random() * REEF_HOLES_RADII.length)
      ],
      switchedOn: false,
    });
  }
  return reefHoles;
};

export const ALL_HOLES = generateReefHoles(TOTAL_NUM_HOLES);

export const switchOnReefHoles = (
  allHoles: Coordinates[],
  percentageOn: number,
): Coordinates[] => {
  const numHolesOn = Math.floor(allHoles.length * percentageOn);
  const allHolesCopy = [...allHoles];
  for (let i = 0; i < allHoles.length; i += 1) {
    allHolesCopy[i].switchedOn = i < numHolesOn;
  }
  return allHolesCopy;
};

export const createRectangle = (
  ctx: Context,
  startX: number,
  startY: number,
  width: number,
  height: number,
  direction: number,
): void => {
  ctx.moveTo(startX, startY);
  ctx.lineTo(
    direction === 1 ? startX + width : startX,
    direction === 1 ? startY : startY + height,
  );
  ctx.lineTo(startX + width, startY + height);
  ctx.lineTo(
    direction === 1 ? startX : startX + width,
    direction === 1 ? startY + height : startY,
  );
  ctx.lineTo(startX, startY);
  ctx.closePath();
};
