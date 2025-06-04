import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function UserDetails() {
    const DATA = ["John Doe", "username@gmail.com"];

    return (
        <View style={styles.container}>
            <Text style={styles.name}>{DATA[0]}</Text>
            <Text style={styles.email}>{DATA[1]}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        marginLeft: 15
    },
    name: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#111"
    },
    email: {
        fontSize: 16,
        color: "#555",
        marginTop: 4
    }
});
