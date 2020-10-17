import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import OrphanagesMap from './pages/OrphanagesMap';
import OrphanagesDetails from './pages/OrphanageDetails';

const { Navigator, Screen } = createStackNavigator();

const Routes: React.FC = (): JSX.Element => (
  <NavigationContainer>
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="OrphanagesMap" component={OrphanagesMap} />
      <Screen name="OrphanagesDetails" component={OrphanagesDetails} />
    </Navigator>
  </NavigationContainer>
);

export default Routes;
