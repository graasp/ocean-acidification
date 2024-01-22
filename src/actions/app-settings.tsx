import { appSettingsActionType } from '@/reducers/app-settings';
import {
  DECREMENT_REEF_HOLES,
  INCREMENT_INTERVAL_COUNT,
  INCREMENT_REEF_HOLES,
  RESET_SETTINGS,
  SET_ANIMATION_INDEX,
  SET_DIMENSIONS,
  TOGGLE_ANIMATION_IN_MOTION,
  TOGGLE_MODE,
  TOGGLE_PAUSE,
} from '@/types/app-settings';

interface Dimensions {
  width: number;
  height: number;
}

export const setDimensions = (payload: Dimensions): appSettingsActionType => ({
  type: SET_DIMENSIONS,
  payload,
});

export const togglePause = (): appSettingsActionType => ({
  type: TOGGLE_PAUSE,
});

export const incrementIntervalCount = (): appSettingsActionType => ({
  type: INCREMENT_INTERVAL_COUNT,
});

export const resetSettings = (): appSettingsActionType => ({
  type: RESET_SETTINGS,
});

export const incrementReefHoles = (): appSettingsActionType => ({
  type: INCREMENT_REEF_HOLES,
});

export const decrementReefHoles = (): appSettingsActionType => ({
  type: DECREMENT_REEF_HOLES,
});

export const toggleMode = (): appSettingsActionType => ({
  type: TOGGLE_MODE,
});

export const setAnimationIndex = (payload: number): appSettingsActionType => ({
  type: SET_ANIMATION_INDEX,
  payload,
});

export const toggleAnimationInMotion = (): appSettingsActionType => ({
  type: TOGGLE_ANIMATION_IN_MOTION,
});
