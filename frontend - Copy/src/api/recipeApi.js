import axios from "axios";

const API_URL = "http://localhost:4000/api/recipes";

export const getRecipe = async (ingredients) => {
  try {
    const response = await axios.post(`${API_URL}/generate`, { ingredients });
    return response.data;
  } catch (error) {
    console.error("Error fetching recipe:", error);
    return null;
  }
};

export const getAllRecipes = async () => {
  try {
    const response = await axios.get(`${API_URL}/all`);
    return response.data;
  } catch (error) {
    console.error("Error fetching recipes:", error);
    return [];
  }
};
