import React from 'react'
import { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    SafeAreaView,
    FlatList,
    Image,
    StatusBar,
    Dimensions,
    TextInput
} from 'react-native';

const screenWidth = Dimensions.get('window').width;
const itemWidth = screenWidth / 2 - 20;

const image = { uri: "https://i.pinimg.com/736x/f5/c1/0c/f5c10c69265ef1276d621e605ad224fe.jpg" }

const models = [
    { id: '1', title: 'Model One', image: 'https://i.pinimg.com/736x/11/19/e5/1119e5e8bb7d59a4d66e358031cc30cd.jpg' },
    { id: '2', title: 'Model Two', image: 'https://i.pinimg.com/736x/8a/fb/d3/8afbd3313cec079b9111e117b08216b8.jpg' },
    { id: '3', title: 'Model Three', image: 'https://i.pinimg.com/736x/ab/b6/0a/abb60a04c736daf64d378443c4c25144.jpg' },
    { id: '4', title: 'Model Four', image: 'https://i.pinimg.com/736x/ee/7a/20/ee7a20bb147ccb7d68df88e3db66aebc.jpg' },
];

export default function HomeScreen() {
    const [search, setSearch] = useState('');

    const renderItem = ({ item }) => (
        <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.info}>
                <Text style={styles.title}>{item.title}</Text>
            </View>
        </View>
    );

    return (
        <>
            <StatusBar barStyle="dark-content" translucent backgroundColor="transparent" />
            <ImageBackground source={image} resizeMode='cover' style={styles.background}>
                <View style={styles.bar}>
                    <TextInput
                        placeholder="Search"
                        value={search}
                        onChangeText={setSearch}
                        autoComplete="off"
                        autoCorrect={false}
                        style={styles.searchInput}
                    />

                </View>
                <SafeAreaView style={styles.container}>
                    <FlatList
                        data={models}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id}
                        numColumns={1}
                        contentContainerStyle={styles.list}
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                    />
                </SafeAreaView>
            </ImageBackground>
        </>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
    },
    container: {
        flex: 1,
    },

    list: {
        padding: 0,
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 15,
        marginTop: 30,
        // width: itemWidth,
        alignItems: 'center',
        padding: 1,
        // shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    info: {
        height: 50,
        backgroundColor: '#000',
    },
    image: {
        width: '100%',
        height: 900,
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
    },
    title: {
        color: '#000',
        marginTop: 8,
        fontSize: 16,
        fontWeight: '600',
    },
    bar: {
        paddingTop: 30
    },
    searchInput: {
        backgroundColor: '#fff',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        margin: 15,
        fontSize: 16,
        elevation: 3,
    },

});
