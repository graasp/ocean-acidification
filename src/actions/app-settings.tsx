import { appSettingsActionType } from '@/reducers/app-settings';
import { INCREMENT_INTERVAL_COUNT, TOGGLE_PAUSE } from '@/types/app-settings';

export const togglePause = (): appSettingsActionType => ({
  type: TOGGLE_PAUSE,
});

export const incrementIntervalCount = (): appSettingsActionType => ({
  type: INCREMENT_INTERVAL_COUNT,
});