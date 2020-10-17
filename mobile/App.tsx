/* eslint-disable camelcase */
import React from 'react';

import { useFonts } from 'expo-font';
import {
  Nunito_600SemiBold,
  Nunito_700Bold,
  Nunito_800ExtraBold,
} from '@expo-google-fonts/nunito';
import OrphanagesMap from './src/pages/OrphanagesMap';

const App = (): JSX.Element => {
  const [fontsLoaded] = useFonts({
    Nunito_600SemiBold,
    Nunito_700Bold,
    Nunito_800ExtraBold,
  });

  if (!fontsLoaded) {
    return <div>Still loading...</div>;
  }

  return <OrphanagesMap />;
};

export default App;
