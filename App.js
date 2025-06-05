import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabs from './Navigation/BottomTabs';
import FullScreenImage from './Screens/FullScreenImage';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                {/* Bottom tab navigator as the main app flow */}
                <Stack.Screen name="Main" component={BottomTabs} />

                {/* Full screen image view */}
                <Stack.Screen name="FullScreenImage" component={FullScreenImage} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
