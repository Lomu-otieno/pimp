import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import ProfilePicture from "../Components/ProfilePicture";
import UserDetails from "../Components/UserDetails";
import SettingsIcon from "../Components/SettingIcon";
import Posts from "../Components/Posts";

const Profile = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerSection}>
                <ProfilePicture />
                <UserDetails />
            </View>

            <View style={styles.postsSection}>
                <Posts />
            </View>

            <View style={styles.settings}>
                <SettingsIcon />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#e4e4e4",
        padding: 10
    },
    headerSection: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 20
    },
    postsSection: {
        flex: 1,
    },
    settings: {
        position: "absolute",
        bottom: 30,
        left: 20
    }
});

export default Profile;
