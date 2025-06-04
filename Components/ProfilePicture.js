import React from "react";
import { View, StyleSheet, Image } from "react-native";

export default function ProfilePicture() {
    const image = { uri: "https://i.pinimg.com/736x/90/be/d3/90bed3f4907b5b087fbf431158e0a3c0.jpg" };

    return (
        <View style={styles.container}>
            <Image source={image} style={styles.profileImage} />
        </View>
    );
}

const IMAGE_SIZE = 100;

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    profileImage: {
        width: IMAGE_SIZE,
        height: IMAGE_SIZE,
        borderRadius: IMAGE_SIZE / 2,
        borderWidth: 2,
        borderColor: "#fff",
    }
});
