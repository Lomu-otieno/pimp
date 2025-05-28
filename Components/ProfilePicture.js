import React from "react";
import { View, StyleSheet, Image, SafeAreaView } from "react-native";

export default function ProfileImage() {
    const image = { uri: "https://i.pinimg.com/736x/90/be/d3/90bed3f4907b5b087fbf431158e0a3c0.jpg" };

    return (
        <SafeAreaView style={styles.container}>
            <View >
                <Image source={image} style={styles.profileImage} />
            </View>
        </SafeAreaView>
    );
}

const IMAGE_SIZE = 200;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
        padding: 0
    },
    profileImage: {
        position: "absolute",
        top: 15,
        left: 0,
        width: IMAGE_SIZE,
        height: IMAGE_SIZE,
        borderRadius: IMAGE_SIZE / 2,
        borderWidth: 1,
        borderColor: "#fff"
    }
});
