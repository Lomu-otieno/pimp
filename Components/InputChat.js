import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from "react-native";

export default function InputChat() {
    const [message, setMessage] = useState("");

    return (
        <View style={styles.inputContainer}>
            <TextInput
                value={message}
                onChangeText={setMessage}
                placeholder="Type your message"
                placeholderTextColor="#ccc"
                style={styles.input}
            />
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Send</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        backgroundColor: "#000",  // Black background
    },
    input: {
        flex: 1,
        color: "#fff",
        padding: 10,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: "#555",
        marginRight: 10
    },
    button: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: "#fff",   // White button background
        borderRadius: 20
    },
    buttonText: {
        color: "#000", // Black text on white button
        fontWeight: "bold"
    }
});
