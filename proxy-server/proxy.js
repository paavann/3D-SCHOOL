const express = require("express");
const OpenAI = require("openai");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const openai = new OpenAI({
    apiKey: process.env.OpenAI_API_KEY
});

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/chatgpt", async (req, res) => {
    try {
        console.log("Request Body:", req.body);

        const completion = await openai.chat.completions.create({
            messages: [
                { role: "system", content: "You are an AI teacher and you will help students." },
                { role: "user", content: req.body.message },
            ],
            model: "gpt-3.5-turbo",
        });

        res.json({ response: completion.choices[0].message.content });
    }   catch (error){
        console.error(
            "Error Details:",
            error.response ? error.response.data : error.message
        );
        res
          .status(error.response ? error.response.status : 500)
          .json({ error: "an error occured" });
    }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`proxy server is running on port ${PORT}`);
});
