import React from "react";
import { View, StyleSheet, FlatList, Image } from "react-native";

export default function Posts() {
    const Images = [
        { id: 1, image: { uri: "https://i.pinimg.com/736x/bf/90/58/bf9058b803e01499b8b838ba5192b283.jpg" } },
        { id: 2, image: { uri: "https://i.pinimg.com/736x/1f/c5/17/1fc517cbad4a91c24a30503a5a9fd404.jpg" } },
        { id: 3, image: { uri: "https://i.pinimg.com/736x/47/4f/46/474f466b26763324ea906474c9e7dab8.jpg" } },
        { id: 4, image: { uri: "https://i.pinimg.com/736x/46/32/3b/46323b0e24fb7c9f674d25fcc121a18e.jpg" } },
        { id: 5, image: { uri: "https://i.pinimg.com/736x/8a/7d/58/8a7d580886f5f511f59a96e9275fdfbc.jpg" } },
        { id: 6, image: { uri: "https://i.pinimg.com/736x/fc/de/ff/fcdeff08332ce66d80b25ee36cd8e141.jpg" } }
    ];

    return (
        <FlatList
            data={Images}
            keyExtractor={(item) => item.id.toString()}
            numColumns={2}
            columnWrapperStyle={styles.row}
            renderItem={({ item }) => (
                <View style={styles.imageContainer}>
                    <Image source={item.image} style={styles.image} />
                </View>
            )}
            contentContainerStyle={styles.content}
        />
    );
}

const styles = StyleSheet.create({
    content: {
        paddingBottom: 100
    },
    row: {
        justifyContent: "space-between"
    },
    imageContainer: {
        flex: 1,
        margin: 5,
        borderRadius: 10,
        overflow: "hidden"
    },
    image: {
        width: "100%",
        height: 200,
        borderRadius: 10
    }
});
