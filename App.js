import React from "react";
import { View } from "react-native";
import HomeScreen from "./Screens/HomeScreen";
import { StatusBar } from "expo-status-bar";
import Chat from "./Screens/Chat";
import Profile from "./Screens/Profile";

export default () => {
    return (
        <>
            {/* <StatusBar barStyle="light-content" backgroundColor="#fff" /> */}
            <View style={{ flex: 1 }}>
                {/* <HomeScreen /> */}
                {/* <Chat /> */}
                <Profile />
            </View>
        </>
    )
} 