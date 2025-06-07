// server.js
require('dotenv').config();
const express = require('express');
const { GoogleGenerativeAI } = require('@google/generative-ai');
const cors = require('cors');

if (!process.env.GOOGLE_API_KEY) {
    console.error("Fehler: GOOGLE_API_KEY ist nicht in der .env-Datei gesetzt.");
    process.exit(1);
}

const app = express();
const port = 3000;

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-latest"});

app.use(cors());
app.use(express.json());

app.post('/chat', async (req, res) => {
    const { message } = req.body;

    if (!message) {
        return res.status(400).json({ error: 'Keine Nachricht angegeben.' });
    }

    try {
        const chat = model.startChat();
        const result = await chat.sendMessage(message);
        const response = await result.response;
        const text = response.text();
        res.json({ reply: text });

    } catch (error) {
        console.error("Fehler bei der Kommunikation mit der Google-API:", error);
        res.status(500).json({ error: 'Ein Fehler ist aufgetreten.' });
    }
});

app.listen(port, () => {
    console.log(`Server läuft auf http://localhost:${port}`);
});