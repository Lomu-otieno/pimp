import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

export default function SettingsIcon() {
    return (
        <View>
            <TouchableOpacity style={styles.button}>
                <FontAwesome name="gear" size={26} color="#111" />
            </TouchableOpacity>
        </View>
    );
}

const SIZE = 50;

const styles = StyleSheet.create({
    button: {
        width: SIZE,
        height: SIZE,
        backgroundColor: "#ccc",
        borderRadius: SIZE / 2,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowOffset: { width: 2, height: 2 },
        shadowRadius: 4
    }
});
