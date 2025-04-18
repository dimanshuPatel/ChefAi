import express from "express";
//import axios from "axios";
import cors from "cors";
import dotenv from "dotenv";
import { generateRecipe, getUserRecipes } from "./src/controllers/recipeController.js";
import userRouter from "./src/routes/auth_router.js";
import { DB } from "./src/db.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors({
  origin: "*",
}));

//const QWEN_API_KEY = process.env.QWEN_API_KEY;

app.post("/api/recipes/generate", generateRecipe)
app.get("/api/getrecepie/:userId", getUserRecipes);
app.use("/api/user", userRouter)


DB()
app.listen(5000, () => console.log("Server running on port 5000"));
