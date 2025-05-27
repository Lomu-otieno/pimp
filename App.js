import React from "react";
import HomeScreen from "./Screens/HomeScreen";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import Chat from "./Screens/Chat";

export default () => {
    return (
        <>
            {/* <StatusBar barStyle="light-content" backgroundColor="#fff" /> */}
            <View style={{ flex: 1 }}>
                {/* <HomeScreen /> */}
                <Chat />
            </View>
        </>
    )
} 