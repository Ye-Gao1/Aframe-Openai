const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 3000;

app.use(express.json());

app.post('/check-openai', async (req, res) => {
    const userInput = req.body.input;

    try {
        const response = await axios.post('https://jamsapi.hackclub.dev/openai/chat/completions', {
            prompt: userInput,
            model: 'gpt-3.5-turbo',
            max_tokens: 5,
        }, {
            headers: {
                'Authorization': `Bearer ODY6ZIYF36G45LY7DFQ3K0BRUEWPJLWJT9814OZ3P68U18OA5B7QQN6FGVAZ2RN6`
            }
        });

        res.json({ status: "connected", response: response.data.choices[0].text });
    } catch (error) {
        res.json({ status: "failed", error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
