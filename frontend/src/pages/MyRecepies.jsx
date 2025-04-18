import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const MyRecipes = () => {
  const navigate = useNavigate();
  const userId = localStorage.getItem("userId");
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!userId) {
      navigate("/login");
      return;
    }

    const fetchUserRecipes = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/getrecepie/${userId}`);
        if (response.data.success) {
          setRecipes(response.data.recipes || []);
        } else {
          setError("No recipes found.");
        }
      } catch (err) {
        setError("Failed to load recipes.");
      }
      setLoading(false);
    };

    fetchUserRecipes();
  }, [userId, navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-r from-black via-gray-900 to-black px-6 py-10 text-white">
      <h1 className="text-5xl font-bold text-orange-500 text-center mb-12">
        📜 My Saved Recipes
      </h1>

      {loading && <p className="text-orange-400 font-semibold animate-pulse">Loading your recipes...</p>}
      {error && <p className="text-red-500 font-medium">{error}</p>}

      {recipes.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 overflow-auto max-h-[70vh] scrollbar-thin scrollbar-thumb-orange-500 scrollbar-track-black">
          {recipes.map((recipe, index) => (
            <div
              key={index}
              className="bg-gradient-to-b from-gray-900 to-black p-6 rounded-2xl shadow-2xl border border-orange-500"
            >
              <h3 className="text-2xl font-bold text-orange-400 mb-4">🍽️ Recipe {index + 1}</h3>
              <div className="text-gray-300 text-sm leading-relaxed whitespace-pre-line">
                {recipe.recipeText}
              </div>
            </div>
          ))}
        </div>
      ) : (
        !loading && <p className="text-gray-400 italic text-center">You haven't saved any recipes yet.</p>
      )}

      <div className="flex justify-center mt-12">
        <Link
          to="/hero"
          className="bg-orange-500 text-white font-semibold py-4 px-8 rounded-lg shadow-lg hover:bg-orange-600 transition duration-300"
        >
          🔙 Back to Recipe Generator
        </Link>
      </div>
    </div>
  );
};

export default MyRecipes;
