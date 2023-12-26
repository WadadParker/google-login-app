import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AuthScreen from './screens/AuthScreen';
import HomeScreen from './screens/HomeScreen';

const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: 'Home' }}
            />
        <Stack.Screen
          name="Auth"
          component={AuthScreen}
          options={{ title: 'Authentication' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
