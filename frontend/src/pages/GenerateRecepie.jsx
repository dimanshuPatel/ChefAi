import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const GenerateRecepie = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const ingredientsFromCard = location.state?.ingredients || [];
  const [ingredients, setIngredients] = useState(ingredientsFromCard);
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [dietaryPreference, setDietaryPreference] = useState("");
  const [calorieLevel, setCalorieLevel] = useState("");

  const userId = localStorage.getItem("userId");

  useEffect(() => {
    if (!userId) navigate("/login");
  }, [userId, navigate]);

  const fetchRecipe = async () => {
    setLoading(true);
    setError("");
    setRecipe(null);
    try {
      const response = await axios.post("http://localhost:5000/api/recipes/generate", {
        userId,
        ingredients,
        dietaryPreference: dietaryPreference || undefined,
        calorieLevel: calorieLevel || undefined,
      });

      if (response.data.error) {
        setError(response.data.error);
      } else {
        navigate("/recipe", { state: { recipe: response.data.recipe } });
      }
    } catch (err) {
      console.error("Error fetching data:", err.message);
      setError("Failed to fetch recipe. Please try again.");
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-r from-black via-gray-900 to-black px-4 py-8 text-white">
      <div className="bg-black bg-opacity-60 backdrop-blur-md border border-orange-500 shadow-2xl shadow-orange-200 rounded-2xl p-8 max-w-xl w-full text-center animate-fadeIn">
        <h1 className="text-4xl font-extrabold text-orange-500 mb-6 cursor-pointer hover:scale-105 transition duration-300">
          🍳 Generate Your Recipe
        </h1>

        <h2 className="text-lg font-semibold text-orange-400 mb-2">Dietary Preference:</h2>
        <select
          value={dietaryPreference}
          onChange={(e) => setDietaryPreference(e.target.value)}
          className="w-full p-3 border border-orange-400 rounded-lg bg-black bg-opacity-50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 transition duration-300 mt-2"
        >
          <option value="">Select a preference</option>
          <option value="vegetarian">Vegetarian</option>
          <option value="vegan">Vegan</option>
          <option value="non-vegetarian">Non-Vegetarian</option>
        </select>

        <h2 className="text-lg font-semibold text-orange-400 mt-4 mb-2">Calorie Level:</h2>
        <select
          value={calorieLevel}
          onChange={(e) => setCalorieLevel(e.target.value)}
          className="w-full p-3 border border-orange-400 rounded-lg bg-black bg-opacity-50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 transition duration-300 mt-2"
        >
          <option value="">Select calorie level</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>

        <h2 className="text-lg font-semibold text-orange-400 mt-4 mb-2">Selected Ingredients:</h2>
        <div className="flex flex-wrap justify-center gap-2 mb-4">
          {ingredients.length > 0 ? (
            ingredients.map((ingredient, index) => (
              <span key={index} className="flex items-center space-x-2 px-3 py-1 text-sm font-semibold bg-orange-100 text-orange-700 rounded-full shadow hover:bg-orange-200 transition duration-300">
                {ingredient}
                <button onClick={() => setIngredients((prev) => prev.filter((_, i) => i !== index))} className="text-red-500 hover:text-red-700 transition duration-300">❌</button>
              </span>
            ))
          ) : (
            <p className="text-gray-400 italic">No ingredients selected.</p>
          )}
        </div>

        <input
          type="text"
          placeholder="Enter additional ingredients (comma-separated)"
          value={ingredients.join(", ")}
          onChange={(e) => setIngredients(e.target.value.split(",").map((i) => i.trim()))}
          className="w-full p-3 border border-orange-400 rounded-lg bg-black bg-opacity-50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 transition duration-300 mt-2"
        />

        <button
          onClick={fetchRecipe}
          className="mt-6 w-full bg-orange-500 text-white cursor-pointer font-semibold py-3 px-5 rounded-lg shadow-lg hover:bg-orange-600 hover:scale-105 active:scale-95 hover:shadow-orange-700 transition duration-300"
        >
          {loading ? "Generating..." : "Generate Recipe"}
        </button>

        {loading && <p className="mt-4 text-orange-400 font-semibold animate-pulse">✨ Preparing your recipe...</p>}
        {error && <p className="mt-4 text-red-500 font-medium">{error}</p>}
      </div>
    </div>
  );
};

export default GenerateRecepie;
