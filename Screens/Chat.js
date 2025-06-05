import React from 'react';
import {
    StyleSheet,
    View,
    KeyboardAvoidingView,
    Platform,
    ImageBackground,
    TouchableWithoutFeedback,
    Keyboard
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import InputChat from "../Components/InputChat";

export default function ChatScreen() {
    const image = { uri: "https://i.pinimg.com/736x/5a/db/59/5adb59c4e0f1ad06875bd1a7d6069d69.jpg" };
    return (
        <SafeAreaView style={styles.safeArea}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <KeyboardAvoidingView
                    style={styles.container}
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                    keyboardVerticalOffset={Platform.OS === "ios" ? 80 : 0}
                >
                    {/* <ImageBackground source={image} resizeMode="center" style={styles.background}> */}
                    <View style={styles.chatWrapper}>
                        <View style={styles.chatBody}>
                            {/* Future: Messages will appear here */}
                        </View>
                        <InputChat />
                    </View>
                    {/* </ImageBackground> */}
                </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: "#e4e4e4"
    },
    container: {
        flex: 1
    },
    background: {
        flex: 1,
        justifyContent: "flex-end"
    },
    chatWrapper: {
        flex: 1,
        justifyContent: "flex-end"
    },
    chatBody: {
        flex: 1,
        padding: 10
    }
});
