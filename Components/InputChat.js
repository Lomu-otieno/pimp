import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from "react-native";

export default function InputChat() {
    const [message, setMessage] = useState("");

    const handleSend = () => {
        if (!message.trim()) return;

        // Add your message sending logic here
        console.log("Sent:", message);

        setMessage(""); // Clear input after sending
    };

    return (
        <View style={styles.inputContainer}>
            <TextInput
                value={message}
                onChangeText={setMessage}
                placeholder="Type your message"
                placeholderTextColor="#e4e4e4"
                style={styles.input}
            />
            <TouchableOpacity
                style={[styles.button, !message.trim() && { opacity: 0.5 }]}
                onPress={handleSend}
                disabled={!message.trim()}
            >
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
        backgroundColor: "#000",
        borderTopWidth: 1,
        borderColor: "#333"
    },
    input: {
        flex: 1,
        color: "#fff",
        paddingVertical: 8,
        paddingHorizontal: 15,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: "#666",
        fontSize: 20,
        backgroundColor: "#222",
        marginRight: 10
    },
    button: {
        paddingVertical: 10,
        paddingHorizontal: 16,
        backgroundColor: "#e4e4e4",
        borderRadius: 25
    },
    buttonText: {
        fontSize: 20,
        color: "#000",
        fontWeight: "bold"
    }
});
