import React, { useState } from 'react';
import { StatusBar } from 'react-native-web';
import { StyleSheet, Text, TextInput, View, Button, ImageBackground } from 'react-native';

export default function LoginScreen({ navigation }) {
    const image = { uri: 'https://i.pinimg.com/736x/a6/67/91/a66791d84643c756a41fefbd075e7cc7.jpg' };
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if (!email || !password) {
            alert('Please enter both email and password');
        } else if (email === 'username@gmail.com' && password === 'password') {
            navigation.navigate('Home');
        } else {
            alert('Invalid credentials');
        }
    };


    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
            <ImageBackground source={image} style={styles.background}>
                <View style={styles.container}>
                    <Text style={styles.title}>Login</Text>
                    <TextInput
                        placeholder="email or username"
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
                        <Button style={{ padding: 20 }} title="L o g i n" onPress={handleLogin} />
                    </View>
                </View>
                <View style={styles.signButton} >
                    <Button title='sign in'
                        onPress={() => navigation.navigate('Signin')}
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
    placeholder: {
        color: 'white',
    },
    container: {
        padding: 20,
        backgroundColor: 'rgba(255,255,255,0.9)',
        margin: 20,
        borderRadius: 10,
        opacity: 0.8,
        borderRadius: 50,
        justifyContent: "center",
    },
    title: {
        fontSize: 28,
        marginBottom: 30,
        textAlign: 'center',
        color: 'blue'
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


    },
});
