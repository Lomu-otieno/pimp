import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ProfilePicture from "../Components/ProfilePicture";
import UserDetails from "../Components/UserDetails";
import Settings from "../Components/SettingIcon";
import { SafeAreaView } from "react-native-safe-area-context";

export default (() => {
    const Data = ["John Doe", "", "username@gmail.com", "Male"]
    return (
        <SafeAreaView style={styles.container}>
            <ProfilePicture />
            <View style={styles.UserDetails}>
                <UserDetails />
            </View>
            <View style={styles.settingsIcon} >
                <Settings />
            </View>
        </SafeAreaView>

    )
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
        left: 5,
        alignContent: "center",
        backgroundColor: "#fff",
        position: "relative"

    },
    UserDetails: {
        position: "absolute",
        right: 40
    },
    settingsIcon: {
        position: "absolute",
        bottom: 100,
        left: 5
    }

})