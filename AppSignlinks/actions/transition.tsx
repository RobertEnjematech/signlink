import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Onboardingscreen from '../screens/onboardscreens';
import SigntoText from '../screens/signtotextscreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="sign" component={SigntoText} />
        <Stack.Screen name="onboard" component={Onboardingscreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
