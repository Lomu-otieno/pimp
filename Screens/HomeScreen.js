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
        height: 60,
        paddingHorizontal: 10,
        paddingTop: 10,
    },
    cardSection: {
        flex: 1,
        paddingTop: 10,
    }
});
