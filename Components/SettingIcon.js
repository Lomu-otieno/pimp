import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

export default function Settings() {
    return (
        <View style={styles.container} >
            <TouchableOpacity style={styles.settingButton}>
                <Text style={styles.SettingText}>Settings</Text>
            </TouchableOpacity>
        </ View>
    )
}
const styles = StyleSheet.create({
    container: {

    },
    settingButton: {
        backgroundColor: "#e4e4e4",
        borderRadius: 5
    },
    SettingText: {
        color: "blue",
        fontSize: 20,
        padding: 5

    }
})