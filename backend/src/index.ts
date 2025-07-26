import express, { Request, Response }
    from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('RiderCompanion Backend');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

// Add after existing app.post('/driver/validate-profile')
app.get('/driver/profiles/pending', (req: Request, res: Response) => {
    // Mock data for pending profiles (replace with database query)
    const pendingProfiles = [
        { id: 1, name: 'Captain A', status: 'pending' },
        { id: 2, name: 'Captain B', status: 'pending' },
    ];
    res.status(200).send(pendingProfiles);
});

app.post('/driver/validate-profile/:id', (req: Request, res: Response) => {
    const { id } = req.params;
    const { status } = req.body;
    // Logic to update profile status (e.g., in database)
    console.log(`Profile ${id} set to ${status}`);
    res.status(200).send('Profile status updated');
});