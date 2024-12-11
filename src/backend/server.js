const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { getColleges } = require('./db');

const app = express();
// Enable CORS for frontend running on localhost:3000
app.use(cors({
    origin: 'http://localhost:3000' // Allow requests from localhost:3000 only
})); app.use(bodyParser.json());

app.post('/get_colleges', async (req, res) => {
    const { satScoreMath, satScoreEnglish, state } = req.body; // Destructure payload

    // Ensure payload is validated before calling the database
    if (!satScoreMath || !satScoreEnglish || !state || !Array.isArray(state)) {
        return res.status(400).json({ error: 'Invalid payload. Missing required fields.' });
    }
    console.log('Payload is valid');

    try {
        const colleges = await getColleges({ satScoreMath, satScoreEnglish, state }); // Pass as an object
        res.status(200).json(colleges); // Return the list of colleges
    } catch (error) {
        console.error('Error fetching colleges:', error);
        res.status(500).json({ error: 'Failed to fetch colleges', details: error.message });
    }
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
