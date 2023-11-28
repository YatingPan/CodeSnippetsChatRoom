# CodeSnippetsChatRoom

## Overview

CodeSnippetsChatRoom provides code snippets for the online discussion chat room, utilizing OpenAI's GPT-3.5-turbo model via the ChatGPT API. This tool evaluates user comments in chat rooms against the principles of democratic discussion.

## Features
Evaluates comments in a chat room using the GPT-3.5-turbo model.

Saves API responses as JSON files for further analysis or review.

## Prerequisites
Node.js installed on your system.

An active OpenAI API key.

## Setup and Usage
Clone the Repository: Clone the GitHub repository to your local machine.
git clone https://github.com/YatingPan/CodeSnippetsChatRoom.git

Navigate to Project Directory: Change your directory to the CodeSnippetsChatRoom root folder.
cd CodeSnippetsChatRoom

Run the Script: Execute the evaluateComments.js script using Node.js.
node .\evaluateComments.js

Check the Output: Observe the output in the terminal. The GPT-3.5-turbo model's response will be logged to the console and saved as a JSON file (gpt_response.json) in the same directory as the input data (real_1.json).

![Output Screenshot](/CodeSnippetsChatRoom/images/output_screenshot.png)

## Customization
You can replace the real_1.json file with other JSON files containing chat data to test different scenarios.

## Note
Ensure you replace the placeholder OpenAI API key in the .env file with your own API key. The API key will be revoked if published on GitHub.
