const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors()); // Enable All CORS Requests

app.get('/weather', async (req, res) => {
    try {
        const { city } = req.query;
        const apiKey = 'f6f5b1bb19309a69badd6c73e3939e04';
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        const response = await axios.get(url);
        res.json(response.data);
    } catch (error) {
        res.status(500).send(error.toString());
    }
});

app.listen(port, () => {
    console.log(`Proxy server is running on http://localhost:${port}`);
});