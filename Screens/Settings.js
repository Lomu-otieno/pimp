import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const SettingsScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <Text style={styles.header}>Settings</Text>

                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Profile')}>
                    <Text style={styles.buttonText}>Edit Profile Picture</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Change Password</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Logout</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.button, styles.deleteButton]}>
                    <Text style={[styles.buttonText, styles.deleteText]}>Delete Account</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default SettingsScreen;

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#F9FAFB',
    },
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingVertical: 40,
    },
    header: {
        fontSize: 28,
        fontWeight: '600',
        marginBottom: 32,
        color: '#1F2937',
        textAlign: 'center',
    },
    button: {
        backgroundColor: '#ffffff',
        paddingVertical: 18,
        paddingHorizontal: 16,
        borderRadius: 12,
        marginBottom: 16,
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 8,
        elevation: 3,
    },
    buttonText: {
        fontSize: 16,
        color: '#111827',
        textAlign: 'center',
        fontWeight: '500',
    },
    deleteButton: {
        backgroundColor: '#FEE2E2',
    },
    deleteText: {
        color: '#B91C1C',
        fontWeight: '700',
    },
});
