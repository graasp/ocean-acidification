import { useEffect } from 'react';

import { useLocalContext } from '@graasp/apps-query-client';
import { Context, DEFAULT_LANG } from '@graasp/sdk';

import Qs from 'qs';

import AppSettingsProvider from '@/contexts/AppSettingsProvider';

import i18n from '../../config/i18n';
// import { AppDataProvider } from '../context/AppDataContext';
// import { MembersProvider } from '../context/MembersContext';
// import { SettingsProvider } from '../context/SettingsContext';
import AnalyticsView from './AnalyticsView';
import BuilderView from './BuilderView';
import PlayerView from './PlayerView';

const App = (): JSX.Element => {
  const context = useLocalContext();

  useEffect(() => {
    // handle a change of language
    const lang =
      Qs.parse(window.location.search, {
        ignoreQueryPrefix: true,
      }).lang?.toString() ?? DEFAULT_LANG;
    if (i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
  }, [context]);

  const renderContent = (): JSX.Element => {
    switch (context.context) {
      case Context.Builder:
        return (
          <AppSettingsProvider>
            <BuilderView />
          </AppSettingsProvider>
        );

      case Context.Analytics:
        return <AnalyticsView />;

      case Context.Player:
      default:
        return <PlayerView />;
    }
  };

  return renderContent();
  // commented out on initial commit due to errors
  // (
  //   <MembersProvider>
  //     <SettingsProvider>
  //       <AppDataProvider></AppDataProvider>
  //     </SettingsProvider>
  //   </MembersProvider>,
  // );
};

export default App;
