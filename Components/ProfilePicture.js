import React from "react";
import { View, StyleSheet, Image, SafeAreaView } from "react-native";

export default function ProfileImage() {
    const image = { uri: "https://i.pinimg.com/736x/03/8a/c0/038ac0e2741b4f63e58197255085451b.jpg" };

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
        padding: 20,
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
