import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import FontAwesome from 'react-native-vector-icons/FontAwesome';


export default function SettingsIcon() {
    return (
        <View style={styles.container} >
            <TouchableOpacity style={styles.settingButton}>
                <FontAwesome name="gear" size={30} color="#111" />
            </TouchableOpacity>
        </ View>
    )
}

const iconSize = 50
const styles = StyleSheet.create({
    container: {

    },
    settingButton: {
        justifyContent: "center",
        alignItems: "center",
        width: iconSize,
        height: iconSize,
        borderRadius: iconSize / 2,
        padding: 10,
        backgroundColor: "#e4e4e4",
    },
})