import { useEffect } from 'react';

import AppSettingsProvider from '@/contexts/AppSettingsProvider';

import i18n from '../../config/i18n';
import BuilderView from './BuilderView';

const App = (): JSX.Element => {
  useEffect(() => {
    // handle a change of language
    const lang =
      new URLSearchParams(window.location.search).get('lang') ?? 'en';
    if (i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
  });

  return (
    <AppSettingsProvider>
      <BuilderView />
    </AppSettingsProvider>
  );
};

export default App;
