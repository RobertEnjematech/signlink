import React from 'react';

import Loadingscreen from '@/AppSignlinks/screens/loadscreen';
import Onboardingscreen from '@/AppSignlinks/screens/onboardscreens';
import SigntoText from '@/AppSignlinks/screens/signtotextscreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function RootLayout() {
  return (

      <Stack.Navigator initialRouteName="loading" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="loading" component={Loadingscreen} />
        <Stack.Screen name="sign" component={SigntoText} />
        <Stack.Screen name="onboard" component={Onboardingscreen} />
      </Stack.Navigator>
    
  );
}
