require('dotenv').config();
console.log("OpenAI API Key:", process.env.OPENAI_API_KEY);

const axios = require('axios');
const fs = require('fs').promises;

// Function to read JSON data
async function readJsonData(filePath) {
    try {
        const data = await fs.readFile(filePath, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Error reading JSON file:', error);
        throw error;
    }
}

// Function to call ChatGPT API
async function evaluateComments(jsonData) {
    try {
        const messages = jsonData.comments.map(comment => ({
            role: "user",
            content: comment.content
        }));

        // Setting the model role as an expert
        messages.unshift({
            role: "system",
            content: "You are a knowledgeable scholar in the field of democratic discussions. Evaluate the following user comments for their alignment with democratic discussion principles."
        });

        const response = await axios.post('https://api.openai.com/v1/chat/completions', {
            model: "gpt-3.5-turbo",
            messages: messages,
            max_tokens: 1000,
            temperature: 0.7,
            top_p: 1,
            frequency_penalty: 0.5,
            presence_penalty: 0.5
        }, {
            headers: {
                'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
                'Content-Type': 'application/json'
            }
        });

        // Printing the response
        console.log("Response from OpenAI:", response.data);
        return response.data;
    } catch (error) {
        console.error('Error calling GPT-4 API:', error);
        throw error;
    }
}

// Function to write data to a JSON file
async function writeJsonData(filePath, data) {
    try {
        await fs.writeFile(filePath, JSON.stringify(data, null, 2), 'utf-8');
        console.log(`Data written to file: ${filePath}`);
    } catch (error) {
        console.error('Error writing to JSON file:', error);
        throw error;
    }
}

// Main execution function
async function main() {
    const jsonData = await readJsonData('./chats/real_1.json');
    const evaluation = await evaluateComments(jsonData);
    console.log("Evaluation:", evaluation);

    // Write the GPT response to a file
    await writeJsonData('./chats/gpt_response.json', evaluation);
}

main();