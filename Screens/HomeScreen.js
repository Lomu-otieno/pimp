import React from "react";
import Search from "../Components/Search";
import Card from "../Components/Card";
import { StyleSheet, View } from "react-native";
import Colors from "../Constants/Colors";
import { StatusBar } from "expo-status-bar";
export default () => {

    return (

        <View style={styles.container}>
            <Search style={styles.searchBar} />
            <Card style={styles.cardSection} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    searchBar: {
        flex: 1,
    },
    cardSection: {
        justifyContent: "center"

    }
})