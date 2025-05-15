import React, { useState } from 'react';
import { StatusBar } from 'react-native-web';
import { StyleSheet, Text, TextInput, View, Button, ImageBackground, FlatList } from 'react-native';

export default function SigninScreen({ navigation }) {
    const image = { uri: 'https://i.pinimg.com/736x/3c/0f/89/3c0f89739029cc4b2f41574cc7dedc68.jpg' };
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSignin = () => {
        if (!username || !email || !password) {
            alert('Enter Details');
        } else if (username === 'lomu' && email === 'lomu' && password === 'lomu') {
            navigation.navigate('Login');
        }
    };


    return (<>

        <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
        <ImageBackground source={image} style={styles.background} resizeMode='cover'>
            <View style={styles.overlay} />
            <View style={styles.container}>
                <Text style={styles.title}>Sign in</Text>
                <TextInput
                    placeholder="username"
                    style={styles.input}
                    value={username}
                    onChangeText={setUsername}
                    autoCapitalize='none'
                />
                <TextInput
                    placeholder="email"
                    style={styles.input}
                    value={email}
                    onChangeText={setEmail}
                    autoCapitalize='none'
                    keyboardType='email-address'
                />
                <TextInput
                    placeholder="password"
                    style={styles.input}
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                    autoCapitalize='none'
                />
                <View style={styles.buttonContainer}>
                    <Button style={{ padding: 20 }} title="S i g n i n" onPress={handleSignin} />
                </View>
            </View>
            <View style={styles.signButton} >
                <Button title='log in'
                    onPress={() => navigation.navigate('Login')}
                />
            </View>
        </ImageBackground>
    </>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center'
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
    },

    container: {
        padding: 20,
        // backgroundColor: 'rgba(255,255,255,0.9)',
        margin: 20,
        borderRadius: 10,
        opacity: 0.8,
        borderRadius: 50,
        justifyContent: "center",
    },
    title: {
        fontSize: 28,
        // marginBottom: 10,
        textAlign: 'center',
        color: '#fff'
    },
    input: {
        color: '#000',
        fontSize: 20,
        height: 50,
        borderColor: '#fff',
        borderBottomWidth: 2,
        borderRadius: 15,
        marginBottom: 20,
        paddingHorizontal: 10
    },
    buttonContainer: {
        bottom: 0,
        left: 0,
        right: 0,
    },
    signButton: {
        position: "absolute",
        top: 100,
        right: 20,
    }

});
