import react from "react";
import { View, Text, TouchableOpacity, SafeAreaView, StyleSheet } from "react-native";
import Colors from "../Constants/Colors";
export default () => {
    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.text}>Theme</Text>
            </TouchableOpacity >

            <TouchableOpacity style={styles.button}>
                <Text>Settings</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
                <Text>Log Out</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background
    },
    button: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10,
        margin: 10,
    },
    text: {
        fontSize: 20,
        color: Colors.text,
    }
});