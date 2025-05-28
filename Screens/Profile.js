import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ProfilePicture from "../Components/ProfilePicture";

export default (() => {
    const Data = ["John Doe", "", "username@gmail.com", "Male"]
    return (
        <View style={styles.container}>
            <ProfilePicture />
        </View>
    )
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignContent: "center"
    }
})