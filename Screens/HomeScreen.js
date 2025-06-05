import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Search from "../Components/Search";
import Card from "../Components/Card";

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Search style={styles.searchBar} />
            <Card style={styles.cardSection} />
        </View>
    );
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
