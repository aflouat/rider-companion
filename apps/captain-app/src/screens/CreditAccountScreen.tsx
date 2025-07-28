// src/screens/CreditAccountScreen.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const CreditAccountScreen = () => {
    const [amount, setAmount] = useState(0);
    const [message, setMessage] = useState('');

    const handleCredit = () => {
        const fakeTransaction = {
            id: Date.now(),
            amount: amount,
            date: new Date().toISOString(),
            status: 'completed',
        };
        setMessage(`Transaction successful! ${amount} EUR credited. Transaction ID: ${fakeTransaction.id}`);
        console.log('Fake transaction:', fakeTransaction);
        const captain = JSON.parse(localStorage.getItem('captain') || '{}');
        if (captain.id) {
            captain.solde = (captain.solde || 0) + amount;
            localStorage.setItem('captain', JSON.stringify(captain));
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Credit My Account</Text>
            <View style={styles.card}>
                <TextInput
                    style={styles.input}
                    placeholder="Amount (EUR)"
                    keyboardType="numeric"
                    value={amount.toString()}
                    onChangeText={(text) => setAmount(Number(text))}
                />
                <Button title="Credit Account" onPress={handleCredit} color="#1976D2" />
                {message ? <Text style={styles.message}>{message}</Text> : null}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, backgroundColor: '#F5F5F5', justifyContent: 'center' },
    title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
    card: { backgroundColor: 'white', padding: 15, borderRadius: 10, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 5 },
    input: { height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, padding: 10, borderRadius: 5 },
    message: { marginTop: 10, color: 'green', textAlign: 'center' },
});

export default CreditAccountScreen;