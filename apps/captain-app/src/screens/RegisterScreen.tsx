// src/screens/RegisterScreen.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const RegisterScreen = ({  }) => {
    const [captain, setCaptain] = useState({ name: '', email: '' });
    const [message, setMessage] = useState('');

    const handleSubmit = () => {
        setMessage(`Registration successful for ${captain.name}. Awaiting validation.`);
        console.log('Registered captain:', captain);
        // Simuler navigation vers profil après enregistrement (optionnel)
        // navigation.navigate('Profile');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Captain Registration</Text>
            <TextInput
                style={styles.input}
                placeholder="Name"
                value={captain.name}
                onChangeText={(text) => setCaptain({ ...captain, name: text })}
            />
            <TextInput
                style={styles.input}
                placeholder="Email"
                keyboardType="email-address"
                value={captain.email}
                onChangeText={(text) => setCaptain({ ...captain, email: text })}
            />
            <Button title="Register" onPress={handleSubmit} color="#1976D2" />
            {message ? <Text style={styles.message}>{message}</Text> : null}
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, backgroundColor: '#F5F5F5', justifyContent: 'center' },
    title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
    input: { height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, padding: 10, borderRadius: 5 },
    message: { marginTop: 10, color: 'green', textAlign: 'center' },
});

export default RegisterScreen;