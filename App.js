import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Updates from 'expo-updates';
import { useEffect } from 'react';
import LoginScreen from './screen/LoginScreen';
import HomeScreen from './screen/HomeScreen';
import SigninScreen from './screen/SigninScreen';

const Stack = createStackNavigator();

const App = () => {

  async function onFetchUpadteAsync() {
    try {
      const update = await Updates.checkForUpdateAsync();
      if (update.isAvailable) {
        await Updates.fetchUpdateAsync();
        await Updates.reloadAsync();
      }
    } catch (error) {
      alert(`Error fetching latest pimp app:${error}`)
    }
  }

  useEffect(() => {
    onFetchUpadteAsync();
  }, [])
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false, title: 'Welcome' }}
        />
        <Stack.Screen
          name='Signin'
          component={SigninScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
