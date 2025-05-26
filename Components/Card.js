import React from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

export default function InstagramStyledImage() {
    const image = { uri: 'https://i.pinimg.com/736x/90/05/e0/9005e0f297b6df111812cf4ac87c7689.jpg' };
    return (
        <View style={styles.container}>
            <Image source={image} style={styles.image} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    image: {
        width: screenWidth,
        height: screenWidth,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#ddd',
    },
});
