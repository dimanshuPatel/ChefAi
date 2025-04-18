import { Link } from "react-router-dom";

const HeroNavbar = () => {
  return (
    <nav className="bg-black bg-opacity-60 backdrop-blur-md  text-white p-5  animate-fadeIn">
      <div className="container mx-auto flex justify-between items-center">
        {/* Brand Name */}
        <Link to="/hero">
          <h1 className="text-3xl font-extrabold text-orange-500 tracking-wider hover:scale-105 transition duration-300">
            ChefAi
          </h1>
        </Link>

        {/* Navigation Links */}
        <div className="space-x-4">
          <Link 
            to="/" 
            className="px-5 py-3 bg-orange-500 text-white rounded-xl shadow-md hover:bg-orange-600 hover:scale-105 transition duration-300"
          >
            Home
          </Link>
          <Link 
            to="/generate" 
            className="px-5 py-3 bg-orange-500 text-white rounded-xl shadow-md hover:bg-orange-600 hover:scale-105 transition duration-300"
          >
            Create Recipe
          </Link>
          <Link 
            to="/my-recipes" 
            className="px-5 py-3 bg-orange-500 text-white rounded-xl shadow-md hover:bg-orange-600 hover:scale-105 transition duration-300"
          >
            📜 My Recipes
          </Link>
          <Link 
            to="/login" 
            className="px-5 py-3 bg-red-600 text-white rounded-xl shadow-md hover:bg-red-700 hover:scale-105 transition duration-300"
          >
            Logout
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default HeroNavbar;
