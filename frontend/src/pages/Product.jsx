import { useNavigate } from "react-router-dom";

const Product = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-black via-gray-900 to-black">
      <div className="bg-black text-white p-8 rounded-xl shadow-[0_10px_30px_rgba(255,165,0,0.5)] border border-orange-700 max-w-3xl text-center transition-all duration-500 hover:scale-105">
        <h1 className="text-4xl font-extrabold text-white mb-6">🌟 Our Product</h1>
        <p className="text-lg text-white leading-relaxed">
          Learn more about the amazing features of our product.
        </p>
        <ul className="mt-4 text-lg text-white space-y-3 text-left">
          <li>✅ AI-powered recipe generation using your available ingredients.</li>
          <li>✅ Customized recipes based on dietary preferences and restrictions.</li>
          <li>✅ User-friendly interface to easily add ingredients and generate recipes.</li>
          <li>✅ Option to save, rate, and share your favorite recipes.</li>
        </ul>
        <button 
          className="mt-6 bg-orange-500 text-white cursor-pointer text-lg font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-orange-700 hover:scale-110 transition-all duration-300"
          onClick={() => navigate("/")}
        >
          🏠 Go to Home
        </button>
      </div>
    </div>
  );
};

export default Product;
