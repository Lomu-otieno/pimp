import React from 'react';
import { View, Image, StyleSheet, TouchableWithoutFeedback } from 'react-native';

const FullScreenImage = ({ route, navigation }) => {
    const { uri } = route.params;

    return (
        <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
            <View style={styles.container}>
                <Image source={{ uri }} style={styles.fullImage} resizeMode="contain" />
            </View>
        </TouchableWithoutFeedback>
    );
};

export default FullScreenImage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
    },
    fullImage: {
        width: '100%',
        height: '100%',
    },
});
