import React from 'react';
import { View, Image, Text, StyleSheet, Dimensions, FlatList } from 'react-native';

const screenWidth = Dimensions.get('window').width;

export default function InstagramFeed() {
    const pics = [
        {
            id: '1',
            name: "2pac Atieno",
            age: 25,
            location: "Kisumu",
            Description: "Mustang GT 585hp 5.1 Litre v8 ",
            image: {
                uri: "https://i.pinimg.com/736x/99/c1/3e/99c13e2e3339fb796bb76b8a9095d8b3.jpg"
            }
        },
        {
            id: '2',
            name: "Amalia",
            age: 20,
            location: "Nairobi",
            Description: "Vintage aesthetics 🎞️",
            image: {
                uri: "https://i.pinimg.com/736x/99/1d/c5/991dc518993f9d9d4f6f389b6dd904fa.jpg"
            }
        },
        {
            id: '3',
            name: "Olivia",
            age: 28,
            location: "Mombassa",
            Description: "Black panther BMW M5",
            image: {
                uri: "https://i.pinimg.com/736x/b5/b1/e5/b5b1e5a8aceb2f2c84ec868ca938dafc.jpg"
            }
        },
        {
            id: '4',
            name: "Isla",
            age: 22,
            location: "Nakuru",
            Description: "Clubbing and shit",
            image: {
                uri: "https://i.pinimg.com/736x/27/ad/3c/27ad3c881a11e16b1e7ec5d02879ff9a.jpg"
            }
        },
        {
            id: '5',
            name: "Herper",
            age: 19,
            location: "Naivasha",
            Description: "Stripping and hawking",
            image: {
                uri: "https://i.pinimg.com/736x/7c/93/52/7c93520a803b47a7b94a0877d20141e7.jpg"
            }
        },
        {
            id: '6',
            name: "Lily",
            age: 20,
            location: "Nairobi",
            Description: "Late night thoughts 🌙",
            image: {
                uri: "https://i.pinimg.com/736x/d8/fd/9c/d8fd9c30079c965b0a50cfd70c8e6fb1.jpg"
            }
        },
        {
            id: '7',
            name: "Mia",
            age: 25,
            location: "Lamu",
            Description: "You can’t see me",
            image: {
                uri: "https://i.pinimg.com/736x/37/8f/97/378f9772fd144f42bc7862eb4a2018ba.jpg"
            }
        }
    ];

    return (
        <View style={styles.container}>
            <FlatList
                data={pics}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <View style={styles.imageContainer}>
                        <Image source={item.image} style={styles.image} />
                        <View style={styles.overlay}>
                            <Text style={styles.nameText}>{item.name}, {item.age}</Text>
                            <Text style={styles.locationText}>{item.location}</Text>
                            <Text style={styles.descriptionText}>{item.Description}</Text>
                        </View>
                    </View>
                )}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
    },
    imageContainer: {
        marginBottom: 20,
        borderRadius: 12,
        overflow: 'hidden',
        marginHorizontal: 10,
        elevation: 3,
    },
    image: {
        width: screenWidth - 20,
        height: 700,
        borderRadius: 12,
    },
    overlay: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        padding: 10,
        borderRadius: 8,
    },
    nameText: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#fff',
    },
    locationText: {
        fontSize: 30,
        color: '#eee',
        marginTop: 2,
    },
    descriptionText: {
        fontSize: 18,
        color: '#ddd',
        marginTop: 6,
    }
});
