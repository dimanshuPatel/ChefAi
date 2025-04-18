import { demoRecipes } from "../card.js";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-black via-gray-900 to-black px-6 py-10 text-white">
      <h1 className="text-5xl font-bold text-orange-500 text-center mb-12 animate-fadeIn">🍳 Delicious Recipes</h1>

      <div className="grid grid-cols-1 cursor-pointer sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {demoRecipes.map((recipe) => (
          <Link 
            key={recipe.id} 
            to="/generate" 
            state={{ ingredients: recipe.ingredients }}
          >
            <div className="bg-black bg-opacity-60 backdrop-blur-md p-6 rounded-2xl shadow-2xl border border-orange-500 transform transition duration-500 hover:scale-105 hover:shadow-orange-700 animate-fadeIn">
              <img
                src={recipe.image}
                alt="Recipe"
                className="h-60 w-full object-cover rounded-xl mb-4"
              />
              <h3 className="text-2xl font-bold text-orange-400 mb-3">🍽️ Ingredients:</h3>
              <p className="text-gray-300 text-sm">{recipe.ingredients.join(", ")}</p>
              <p className="text-gray-400 text-xs mt-4">🕒 Created: {new Date(recipe.createdAt).toLocaleString()}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Hero;
