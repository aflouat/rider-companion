import { useState, useEffect } from 'react';
import { Typography, Button, List, ListItem, ListItemText } from '@mui/material';
import axios from 'axios';

import { NotificationsNone as BellIcon } from '@mui/icons-material'; // Ajout de l'icône clochette

import Header from './Header';
import Footer from './Footer';
const ProfileValidation = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false); // État fictif pour le login/logout
    const handleLoginLogout = () => {
        setIsLoggedIn(!isLoggedIn); // Toggle login/logout fictif
    };
    const [profiles, setProfiles] = useState<{ id: number; name: string; status: 'pending' | 'active' | 'inactive'; documents: string }[]>([]);    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_BASE_URL}/driver/profiles/pending`)
            .then(response => setProfiles(response.data))
            .catch(error => console.error('Error fetching profiles:', error))
            .finally(() => setLoading(false));
    }, []);

    const handleActivate = (id: number) => {
        if (window.confirm('Are you sure you want to activate this captain?')) {
            axios.post(`${process.env.REACT_APP_API_BASE_URL}/driver/validate-profile/${id}`, { status: 'validated' })
            .then(() => setProfiles(profiles.filter(profile => profile.id !== id)))
            .catch(error => console.error('Error validating profile:', error));
    };
    }

    const handleDeactivate = (id: number) => {
        if (window.confirm('Are you sure you want to deactivate this captain?')) {
        axios.post(`${process.env.REACT_APP_API_BASE_URL}/driver/validate-profile/${id}`, { status: 'inactive' })
            .then(() => setProfiles(profiles.filter(profile => profile.id !== id)))
            .catch(error => console.error('Error deactivating profile:', error));
    };
    }

    if (loading) return <Typography>Loading...</Typography>;

    return (
        <div className="min-h-screen flex flex-col bg-gray-100">

            <Header logoText="Rider Companion Logo" isLoggedIn={isLoggedIn} onLoginLogout={handleLoginLogout} />
                 <main className="flex-grow p-4">
                <Typography variant="h4" className="text-2xl font-bold mb-4 text-center text-gray-800">
                    Validate Captain Profiles
                </Typography>
                <List className="bg-white shadow-md rounded-lg overflow-hidden">
                    {profiles.map(profile => (
                        <ListItem
                            key={profile.id}
                            className="flex justify-between items-center border-b border-gray-200 hover:bg-gray-50"
                        >
                            <ListItemText
                                primary={profile.name}
                                secondary={`Status: ${profile.status}, Documents: ${profile.documents}`}
                                className="text-gray-700"
                            />
                            <div className="space-x-2">
                                {profile.status === 'pending' && (
                                <Button
                                    variant="contained"
                                    color="primary"
                                    className="bg-blue-600 hover:bg-blue-700"
                                    onClick={() => handleActivate(profile.id)}
                                >
                                    Validate
                                </Button>
                                )}
                                {profile.status === 'active' && (

                                    <Button
                                    variant="contained"
                                    color="secondary"
                                    className="bg-purple-600 hover:bg-purple-700"
                                    onClick={() => handleDeactivate(profile.id)}
                                >
                                    Reject
                                </Button>
                                )}
                            </div>
                        </ListItem>
                    ))}
                </List>

                 </main>
                   <Footer content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
               </div>
    );
};

export default ProfileValidation;