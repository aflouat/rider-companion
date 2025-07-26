import { useState, useEffect } from 'react';
import { Typography, Button, List, ListItem, ListItemText } from '@mui/material';
import axios from 'axios';

const ProfileValidation = () => {
    const [profiles, setProfiles] = useState<{ id: number; name: string; status: string; documents: string }[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_BASE_URL}/driver/profiles/pending`)
            .then(response => setProfiles(response.data))
            .catch(error => console.error('Error fetching profiles:', error))
            .finally(() => setLoading(false));
    }, []);

    const handleValidate = (id: number) => {
        axios.post(`${process.env.REACT_APP_API_BASE_URL}/driver/validate-profile/${id}`, { status: 'validated' })
            .then(() => setProfiles(profiles.filter(profile => profile.id !== id)))
            .catch(error => console.error('Error validating profile:', error));
    };

    const handleReject = (id: number) => {
        axios.post(`${process.env.REACT_APP_API_BASE_URL}/driver/validate-profile/${id}`, { status: 'rejected' })
            .then(() => setProfiles(profiles.filter(profile => profile.id !== id)))
            .catch(error => console.error('Error rejecting profile:', error));
    };

    if (loading) return <Typography>Loading...</Typography>;

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="p-4 max-w-2xl w-full bg-green-500">
                <Typography variant="h4" className="text-2xl font-bold mb-4 text-center text-gray-800">
                    Validate Captain Profiles
                </Typography>
                <List className="bg-white shadow-md rounded-lg overflow-hidden">
                    {profiles.map(profile => (
                        <ListItem
                            key={profile.id}
                            className="flex justify-between items-center border-b border-gray-200 hover:bg-gray-50 transition-colors"
                        >
                            <ListItemText
                                primary={profile.name}
                                secondary={`Status: ${profile.status}, Documents: ${profile.documents}`}
                                className="text-gray-700"
                            />
                            <div className="space-x-2">
                                <Button
                                    variant="contained"
                                    color="primary"
                                    className="bg-blue-600 hover:bg-blue-700"
                                    onClick={() => handleValidate(profile.id)}
                                >
                                    Validate
                                </Button>
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    className="bg-purple-600 hover:bg-purple-700"
                                    onClick={() => handleReject(profile.id)}
                                >
                                    Reject
                                </Button>
                            </div>
                        </ListItem>
                    ))}
                </List>
            </div>
        </div>
    );
};

export default ProfileValidation;