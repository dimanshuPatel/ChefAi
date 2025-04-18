import { useNavigate } from "react-router-dom";

const Features = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-black via-gray-900 to-black px-6">
      <div className="bg-black p-8 rounded-xl shadow-[0_10px_30px_rgba(255,165,0,0.5)] border border-orange-700 max-w-3xl text-center transition-all duration-500 hover:scale-105">
        <h1 className="text-4xl font-extrabold text-white mb-6">🚀 Amazing Features</h1>
        <p className="text-lg text-white leading-relaxed">
          Discover the features that make our product unique.
        </p>
        <ul className="mt-4 text-lg text-white space-y-3 text-left">
          <li>✅ Ingredient-based recipe generation using advanced AI algorithms.</li>
          <li>✅ Support for various dietary preferences like vegan, gluten-free, and more.</li>
          <li>✅ Easy-to-use interface for adding ingredients and generating recipes.</li>
          <li>✅ Save, rate, and share your favorite recipes with others.</li>
        </ul>
        <button 
          className="mt-6 bg-orange-500 text-white text-lg cursor-pointer font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-orange-700 hover:scale-110 transition-all duration-300"
          onClick={() => navigate("/")}
        >
          🏠 Go to Home
        </button>
      </div>
    </div>
  );
};

export default Features;
