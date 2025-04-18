import express from "express";
import { generateRecipe, getAllRecipes, getUserRecipes } from "../controllers/recipeController.js";

const router = express.Router();

router.post("/generate", generateRecipe);
router.get("/all", getAllRecipes); 
router.get("/user/:userId", getUserRecipes);


export default router;
