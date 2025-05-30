import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

export default (() => {
    return (
        <SafeAreaView style={{ flex: 1, }}>
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
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.textInfo}>Delete Account</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
})
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "stretch",
        padding: 100,
        backgroundColor: "#e4e4e4",
    },
    button: {
        margin: 15,
        backgroundColor: "#fff",
        padding: 30,
        borderRadius: 10

    },
    textInfo: {
        textAlign: "center",
        fontSize: 20

    }
})