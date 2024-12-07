const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { getColleges } = require('./db');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/get_colleges', async (req, res) => {
    const { satScore } = req.body;

    try {
        const colleges = await getColleges(satScore);
        res.status(200).json(colleges);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch colleges', details: error.message });
    }
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
