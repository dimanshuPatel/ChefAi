/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 */

import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";

// Replace with your actual API key
const apiKey = "AIzaSyCN8W8IBqZ5DQhValR25ZFBhKgqyV2AOJ8"; 
const genAI = new GoogleGenerativeAI(apiKey);

// Function to list available models (optional, for debugging)
async function listAvailableModels() {
  try {
    const models = await genAI.listModels();
    console.log("Available models:", models);
  } catch (error) {
    console.error("Error fetching models:", error);
  }
}

// Specify the correct model
const model = genAI.getGenerativeModel({
  model: "gemini-1.5-pro", // Change to "gemini-1.5-flash" if needed
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

// Function to generate content
async function generateRecipe(prompt) {
  try {
    const chatSession = model.startChat({
      generationConfig,
      history: [],
    });

    const result = await chatSession.sendMessage(prompt);
    return result.response.text();
  } catch (error) {
    console.error("Error generating recipe:", error);
    return "Failed to generate recipe. Please try again.";
  }
}

// Call listAvailableModels() to check available models (for debugging)
listAvailableModels();

// Export function
export default generateRecipe;
