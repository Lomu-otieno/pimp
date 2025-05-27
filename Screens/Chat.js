import React from "react";
import {
    StyleSheet,
    View,
    KeyboardAvoidingView,
    Platform,
    ImageBackground
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import InputChat from "../Components/InputChat";

export default function ChatScreen() {
    const image = {
        uri: "https://i.pinimg.com/736x/5a/db/59/5adb59c4e0f1ad06875bd1a7d6069d69.jpg"
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <KeyboardAvoidingView
                style={styles.container}
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                keyboardVerticalOffset={Platform.OS === "ios" ? 80 : 0}
            >
                <ImageBackground source={image} resizeMode="cover" style={styles.background}>
                    <View style={styles.chatBody}>
                        {/* This is where messages would go */}
                    </View>
                    <InputChat />
                </ImageBackground>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: "#000"
    },
    container: {
        flex: 1
    },
    background: {
        flex: 1,
        justifyContent: "flex-end"
    },
    chatBody: {
        flex: 1,
        padding: 10
    }
});
