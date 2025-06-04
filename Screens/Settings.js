import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const SettingsScreen = () => {
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.textInfo}>Edit Profile Picture</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.textInfo}>Change Password</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.textInfo}>Logout</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, styles.deleteButton]}>
                    <Text style={[styles.textInfo, styles.deleteText]}>Delete Account</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default SettingsScreen;

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: "#e4e4e4",
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "stretch",
        paddingHorizontal: 40,
    },
    button: {
        marginVertical: 10,
        backgroundColor: "#fff",
        paddingVertical: 20,
        borderRadius: 10,
        elevation: 3, // Android shadow
        shadowColor: "#000", // iOS shadow
        shadowOpacity: 0.1,
        shadowRadius: 5,
        shadowOffset: { width: 0, height: 2 },
    },
    deleteButton: {
        backgroundColor: "#ffdddd",
    },
    textInfo: {
        textAlign: "center",
        fontSize: 18,
        color: "#333",
    },
    deleteText: {
        color: "#d00",
        fontWeight: "bold",
    }
});
