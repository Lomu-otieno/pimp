import React, { useState } from "react";
import { View, StyleSheet, TextInput, Text, TouchableOpacity } from "react-native"
import Colors from "../Constants/Colors";

export default ({ style }) => {
    const [search, setSearch] = useState('');
    return (
        <View style={[styles.container, style]}>
            <View style={styles.searchBox}>
                <TextInput
                    style={styles.searchInput}
                    placeholder="search..."
                    placeholderTextColor={Colors.searchColor}
                    value={search}
                    onChangeText={setSearch}
                    autoCapitalize="none"
                />
                <TouchableOpacity style={styles.cancelButton}>
                    <Text style={styles.cancelButtonText}>cancel</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 0.05,
        paddingVertical: 30,
        paddingHorizontal: 20,
        // backgroundColor: "#fff"

    },
    searchBox: {
        marginTop: 25,
        flexDirection: "row",
        justifyContent: "space-between",
        height: 50,

    },
    searchInput: {
        padding: 10,
        borderWidth: 1,
        borderColor: Colors.borderColor,
        borderRadius: 10,
        width: "80%",
        fontSize: 20,
    },
    cancelButton: {
        justifyContent: "center",
        alignContent: "center",
        marginRight: 10,
        backgroundColor: Colors.buttonColor,
        borderRadius: 5,
    },
    cancelButtonText: {
        fontSize: 20,
        paddingHorizontal: 10,
        color: Colors.textButton,
    }
})