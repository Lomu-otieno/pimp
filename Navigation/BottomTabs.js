import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Correct place to import
import HomeScreen from '../Screens/HomeScreen';
import ProfileScreen from '../Screens/Profile';
import SettingsScreen from '../Screens/Settings';
import ChatScreen from '../Screens/Chat';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarIcon: ({ color, size }) => {
                    let iconName;

                    if (route.name === 'Home') iconName = 'home-outline';
                    else if (route.name === 'Profile') iconName = 'person-outline';
                    else if (route.name === 'Chat') iconName = 'chatbubble-outline';
                    else if (route.name === 'Settings') iconName = 'settings-outline';

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}
        >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Chat" component={ChatScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
    );
};

export default BottomTabs;
