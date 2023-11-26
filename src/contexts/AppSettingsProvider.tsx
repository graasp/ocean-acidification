import { Dispatch, ReactNode, createContext, useMemo, useReducer } from 'react';

import {
  appSettingsActionType,
  appSettingsReducer,
  appSettingsType,
  initialAppSettings,
} from '@/reducers/app-settings';

interface Props {
  children: ReactNode;
}

export const AppSettingsContext = createContext<{
  state: appSettingsType;
  dispatch: Dispatch<appSettingsActionType>;
}>({ state: initialAppSettings, dispatch: () => null });

const AppSettingsProvider = ({ children }: Props): JSX.Element => {
  const [state, dispatch] = useReducer(appSettingsReducer, initialAppSettings);
  const value = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return (
    <AppSettingsContext.Provider value={value}>
      {children}
    </AppSettingsContext.Provider>
  );
};

export default AppSettingsProvider;
