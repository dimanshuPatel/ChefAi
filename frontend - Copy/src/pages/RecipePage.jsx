import { useLocation, useNavigate } from "react-router-dom";

const RecipePage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const recipe = location.state?.recipe;

  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-r from-black via-gray-900 to-black px-6 py-12 text-white">
      <div className="bg-black bg-opacity-70 backdrop-blur-lg border border-orange-500 shadow-2xl rounded-2xl p-10 max-w-5xl w-full text-center">
        <h1 className="text-5xl font-extrabold text-orange-500 mb-10">🍲 Your Recipe</h1>

        {recipe clear
        ? (
          <div className="grid gap-6">
            {recipe.recipeText.split(/(?<=[.!?])\s+/).map((sentence, index) => (
              <div
                key={index}
                className="p-6 text-lg font-medium text-gray-200 bg-gray-900 bg-opacity-70 rounded-xl shadow-md border border-orange-400"
              >
                {sentence}
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-400 italic text-lg">No recipe found.</p>
        )}

        <button
          onClick={() => navigate("/generate")}
          className="mt-10 bg-orange-500 text-white font-semibold py-4 px-10 rounded-xl shadow-lg 
                     hover:bg-orange-600 transition-all duration-300"
        >
          🔄 Generate Another Recipe
        </button>
      </div>
    </div>
  );
};

export default RecipePage;
