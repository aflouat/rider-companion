// src/screens/ProfileScreen.tsx
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProfileScreen = () => {
    const [captain, setCaptain] = useState({
        name: 'Captain 1',
        email: 'captain1@example.com',
        status: 'pending' as 'pending' | 'active' | 'inactive',
        solde: 0,
    });

    useEffect(() => {
        const storedCaptain = localStorage.getItem('captain');
        if (storedCaptain) {
            setCaptain(JSON.parse(storedCaptain));
        }
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Captain Profile</Text>
            <View style={styles.card}>
                <Text><Text style={styles.bold}>Name:</Text> {captain.name}</Text>
                <Text><Text style={styles.bold}>Email:</Text> {captain.email}</Text>
                <Text><Text style={styles.bold}>Status:</Text> {captain.status}</Text>
                <Text><Text style={styles.bold}>Balance:</Text> {captain.solde || 0} EUR</Text>
                {captain.status === 'pending' && <Text style={styles.status}>Your account is pending validation.</Text>}
                {captain.status === 'active' && <Text style={styles.statusActive}>Your account is active.</Text>}
                {captain.status === 'inactive' && <Text style={styles.statusInactive}>Your account is inactive.</Text>}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, backgroundColor: '#F5F5F5', justifyContent: 'center' },
    title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
    card: { backgroundColor: 'white', padding: 15, borderRadius: 10, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 5 },
    bold: { fontWeight: 'bold' },
    status: { marginTop: 10, color: '#F4A261' },
    statusActive: { marginTop: 10, color: '#2A9D8F' },
    statusInactive: { marginTop: 10, color: '#E76F51' },
});

export default ProfileScreen;