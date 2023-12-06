import { appSettingsActionType } from '@/reducers/app-settings';
import {
  DECREMENT_REEF_HOLES,
  INCREMENT_INTERVAL_COUNT,
  INCREMENT_REEF_HOLES,
  RESET_SETTINGS,
  TOGGLE_PAUSE,
} from '@/types/app-settings';

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
