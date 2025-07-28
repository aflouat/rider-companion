// src/components/Admin/Orders.tsx
import React, { useState, useEffect } from 'react';
import { Typography, List, ListItem, ListItemText } from '@mui/material';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';

interface Order {
    id: number;
    date: string;
    id_capitain: number;
    montant: number;
    devise: string;
    status: string;
}

interface Captain {
    id: number;
    name: string; // Ajouté pour un exemple, à ajuster selon vos données
    solde: number;
}

const Orders = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false); // État fictif pour le login/logout
    const handleLoginLogout = () => {
        setIsLoggedIn(!isLoggedIn); // Toggle login/logout fictif
    };
    const [orders, setOrders] = useState<Order[]>([]);
    const [captains, setCaptains] = useState<Captain[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_BASE_URL}/orders`)
            .then(response => {
                setOrders(response.data);
                // Simuler une récupération des capitaines avec solde (à adapter avec un endpoint réel si disponible)
                setCaptains([
                    { id: 1, name: 'Captain 1', solde: 350.0 },
                    // Ajoutez d'autres capitaines si nécessaire
                ]);
            })
            .catch(error => console.error('Error fetching orders:', error))
            .finally(() => setLoading(false));
    }, []);

    if (loading) return <Typography>Loading...</Typography>;

    return (
        <div className="min-h-screen flex flex-col bg-gray-100">
            <Header logoText="Rider Companion Logo" isLoggedIn={isLoggedIn} onLoginLogout={handleLoginLogout} />

            <main className="flex-grow p-4">
                <Typography variant="h4" className="text-2xl font-bold mb-4 text-center text-gray-800">
                    Orders List
                </Typography>
                <div className="bg-white shadow-md rounded-lg overflow-hidden">
                    <table className="w-full border-collapse">
                        <thead>
                        <tr className="bg-gray-200">
                            <th className="p-2 border-b text-left">Order ID</th>
                            <th className="p-2 border-b text-left">Date</th>
                            <th className="p-2 border-b text-left">Captain</th>
                            <th className="p-2 border-b text-left">Amount</th>
                            <th className="p-2 border-b text-left">Status</th>
                            <th className="p-2 border-b text-left">Captain Balance</th>
                        </tr>
                        </thead>
                        <tbody>
                        {orders.map(order => {
                            const captain = captains.find(c => c.id === order.id_capitain);
                            return (
                                <tr key={order.id} className="hover:bg-gray-50">
                                    <td className="p-2 border-b">{order.id}</td>
                                    <td className="p-2 border-b">{new Date(order.date).toLocaleString()}</td>
                                    <td className="p-2 border-b">{captain?.name || 'Unknown'}</td>
                                    <td className="p-2 border-b">{order.montant} {order.devise}</td>
                                    <td className="p-2 border-b">{order.status}</td>
                                    <td className="p-2 border-b">{captain?.solde || 0} {order.devise}</td>
                                </tr>
                            );
                        })}
                        </tbody>
                    </table>
                </div>
            </main>
            <Footer content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
        </div>
    );
};

export default Orders;