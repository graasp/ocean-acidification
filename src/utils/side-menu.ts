import { SEQUENTIAL_MODE_INTERVALS } from '@/constants/motion/sequential-mode-intervals';
import { DOWN, EMPTY_STRING, UP } from '@/constants/strings';

interface ArrowState {
  rightArrow: boolean;
  leftArrow: boolean;
}

interface EquationState {
  migration: ArrowState;
  formation: ArrowState;
  dissociation: ArrowState;
}

export const determineEquationsState = (
  intervalCount: number,
): EquationState => ({
  migration: {
    rightArrow:
      intervalCount > 0 && intervalCount < SEQUENTIAL_MODE_INTERVALS[1],
    leftArrow:
      intervalCount > SEQUENTIAL_MODE_INTERVALS[5] &&
      intervalCount < SEQUENTIAL_MODE_INTERVALS[6],
  },
  formation: {
    rightArrow:
      intervalCount > SEQUENTIAL_MODE_INTERVALS[1] &&
      intervalCount < SEQUENTIAL_MODE_INTERVALS[2],
    leftArrow:
      intervalCount > SEQUENTIAL_MODE_INTERVALS[4] &&
      intervalCount < SEQUENTIAL_MODE_INTERVALS[5],
  },
  dissociation: {
    rightArrow:
      intervalCount > SEQUENTIAL_MODE_INTERVALS[2] &&
      intervalCount < SEQUENTIAL_MODE_INTERVALS[3],
    leftArrow:
      intervalCount > SEQUENTIAL_MODE_INTERVALS[3] &&
      intervalCount < SEQUENTIAL_MODE_INTERVALS[4],
  },
});

export const determineImgSrc = (
  direction: string,
  isActive: boolean,
  isLarge?: boolean,
): string => {
  let src = EMPTY_STRING;
  if (direction === UP) {
    if (isActive || isLarge) src = '/uplg.png';
    else src = '/up.png';
  } else if (direction === DOWN) {
    if (isActive || isLarge) src = '/downlg.png';
    else src = '/down.png';
  }
  return src;
};
