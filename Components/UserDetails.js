import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function UserProfile() {
    const DATA = ["John Doe", "username@gmail.com"];
    return (
        <View style={styles.container}>
            <View style={styles.userDetails}>
                <Text style={styles.usernameText}>{DATA[0]}</Text>
                <Text style={styles.usernameEmail}>{DATA[1]}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "flex-end",
        padding: 20,
    },
    userDetails: {
        position: "absolute",
        right: 0,
        top: 168,
    },
    usernameText: {
        fontSize: 22,
        paddingHorizontal: 5,
        paddingVertical: 10,
        width: 250,
        textAlign: "center",
        backgroundColor: "#fff",
        borderRadius: 5
    },
    usernameEmail: {
        paddingHorizontal: 0,
        paddingVertical: 10,
        fontSize: 20,
        color: "#555"
    }
});
