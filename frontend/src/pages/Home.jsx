import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div 
      className="relative flex items-center justify-center min-h-screen bg-cover bg-center" 
      style={{ backgroundImage: "url('https://t4.ftcdn.net/jpg/04/43/37/07/360_F_443370711_sqHRnSIQovW6uyQ5ZwDpd4kjCG8Q6swm.jpg')" }}
    >
      {/* Main Content */}
      <div className="relative text-center max-w-3xl text-white px-6">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-7xl drop-shadow-lg">
          🍽️ Discover & Create Delicious Recipes
        </h1>
        <p className="mt-6 text-xl leading-relaxed drop-shadow-md">
          Enter your ingredients, select your preferences, and let AI create a unique & tasty recipe just for you!
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <button
            className="rounded-full bg-orange-500 px-6 py-3 cursor-pointer text-lg font-semibold text-white shadow-lg hover:bg-orange-700 transition duration-300"
            onClick={() => navigate("/register")}
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
