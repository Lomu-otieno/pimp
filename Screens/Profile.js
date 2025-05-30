import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ProfilePicture from "../Components/ProfilePicture";
import UserDetails from "../Components/UserDetails";
import SettingsIcon from "../Components/SettingIcon";
import Post from '../Components/Posts'

import { SafeAreaView } from "react-native-safe-area-context";

export default (() => {
    const Data = ["John Doe", "", "username@gmail.com", "Male"]
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flex: 1, }}>
                <ProfilePicture />
                <View style={styles.UserDetails}>
                    <UserDetails />
                </View>
                <View style={styles.postSection}>
                    <Post />
                </View>
                <View style={styles.settingsIcon} >
                    <SettingsIcon />
                </View>
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

    },
    UserDetails: {
        position: "absolute",
        right: 40,
    },
    settingsIcon: {
        position: "absolute",
        bottom: 100,
        left: 5
    },
    postSection: {
        top: 0,
        flex: 3,

    }

})