import React from "react";
import { View, StyleSheet, FlatList, Image } from "react-native";

export default function Posts() {
    const Images = [
        {
            id: 1,
            image: { uri: "https://i.pinimg.com/736x/47/4f/46/474f466b26763324ea906474c9e7dab8.jpg" }
        },
        {
            id: 2,
            image: { uri: "https://i.pinimg.com/736x/46/32/3b/46323b0e24fb7c9f674d25fcc121a18e.jpg" }
        },
        {
            id: 3,
            image: { uri: "https://i.pinimg.com/736x/34/f5/d4/34f5d48339e78819c0536edf18ab18a2.jpg" }
        },
        {
            id: 4,
            image: { uri: "https://i.pinimg.com/736x/37/12/36/3712365493db698fb7067f1e89c907b3.jpg" }
        },
        {
            id: 5,
            image: { uri: "https://i.pinimg.com/736x/8a/7d/58/8a7d580886f5f511f59a96e9275fdfbc.jpg" }
        }
    ];

    return (
        <View style={styles.container}>
            <FlatList
                data={Images}
                keyExtractor={item => item.id.toString()}
                numColumns={2}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                    <View style={styles.imageContainer}>
                        <Image source={item.image} style={styles.image} />
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        padding: 1,
    },
    imageContainer: {
        flex: 1,
        margin: 2,
        borderRadius: 10,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: 500,
        borderRadius: 10
    }
});
