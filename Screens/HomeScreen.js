import React from "react";
import Search from "../Components/Search";
import Card from "../Components/Card";
import { StyleSheet, View } from "react-native";
import Colors from "../Constants/Colors";
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
        backgroundColor: Colors.background
    },
    searchBar: {
        flex: 1,
    },
    cardSection: {
        justifyContent: "center"

    }
})