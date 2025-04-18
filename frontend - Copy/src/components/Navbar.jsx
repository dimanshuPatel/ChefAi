import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-gradient-to-r from-gray-900 to-gray-700 p-4 shadow-lg">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-white text-3xl font-bold hover:text-yellow-400 transition duration-300">
                    🍽️ ChefAi
                </Link>
                <div className="hidden md:flex space-x-8">
                    <Link to="/products" className="text-xl text-white py-2 px-4 rounded-md hover:text-yellow-400 hover:bg-white/20 transition duration-300 hover:border-b-2 hover:border-yellow-400">
                        Products
                    </Link>
                    <Link to="/features" className="text-xl text-white py-2 px-4 rounded-md hover:text-yellow-400 hover:bg-white/20 transition duration-300 hover:border-b-2 hover:border-yellow-400">
                        Features
                    </Link>
                    <Link to="/about" className="text-xl text-white py-2 px-4 rounded-md hover:text-yellow-400 hover:bg-white/20 transition duration-300 hover:border-b-2 hover:border-yellow-400">
                        About
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
