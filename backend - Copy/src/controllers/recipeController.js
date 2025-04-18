import axios from "axios";
import dotenv from "dotenv";
import Recipe from "../models/Recipe.js";
import User from "../models/UserModel.js";

dotenv.config();

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-pro:generateContent?key=${GEMINI_API_KEY}`;


export const generateRecipe = async (req, res) => {
  try {
    const { ingredients, userId } = req.body; // Get userId from request

    if (!userId) {
      return res.status(400).json({ error: "User ID is required." });
    }
    if (!ingredients || ingredients.length === 0) {
      return res.status(400).json({ error: "Please provide ingredients." });
    }

    const promptText = `Generate a creative recipe using these ingredients: ${ingredients.join(", ")}. Include the name, ingredients, and instructions.`;

    const response = await axios.post(GEMINI_API_URL, {
      contents: [{ parts: [{ text: promptText }] }]
    });

    if (!response.data || !response.data.candidates || response.data.candidates.length === 0) {
      return res.status(500).json({ error: "AI response is empty." });
    }

    const aiRecipeText = response.data.candidates[0].content.parts[0].text;

    // Store the generated recipe in MongoDB
    const newRecipe = new Recipe({
      userId, // Associate with user
      ingredients,
      recipeText: aiRecipeText,
    });

    await newRecipe.save();

    // Update the user's recipe list
    await User.findByIdAndUpdate(userId, { $push: { recipes: newRecipe._id } });

    res.json({
      success: true,
      recipe: newRecipe,
    });

  } catch (error) {
    console.error("Error generating recipe:", error.response ? error.response.data : error.message);
    res.status(500).json({ error: "Failed to generate recipe", details: error.message });
  }
};

export const getAllRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find().sort({ createdAt: -1 }); // Sort by newest first
    res.json({ success: true, recipes }); // Return all stored recipes
  } catch (error) {
    console.error("Error fetching recipes:", error.message);
    res.status(500).json({ error: "Failed to fetch recipes" });
  }
};







export const getUserRecipes = async (req, res) => {
  try {
    const { userId } = req.params;
    if (!userId) {
      return res.status(400).json({ success: false, message: "User ID is required." });
    }

    // ✅ Fetch user and populate recipes
    const user = await User.findById(userId).populate("recipes");

    if (!user) {
      return res.status(404).json({ success: false, message: "User not found." });
    }

    // ✅ Instead of 404, return an empty array if the user has no recipes
    if (!user.recipes || user.recipes.length === 0) {
      return res.json({ success: true, recipes: [] });
    }

    res.json({ success: true, recipes: user.recipes });
  } catch (error) {
    console.error("Error fetching user recipes:", error.message);
    res.status(500).json({ success: false, message: "Failed to fetch user recipes." });
  }
};


