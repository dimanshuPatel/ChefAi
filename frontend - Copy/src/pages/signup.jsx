import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
    const [formData, setFormData] = useState({ name: "", email: "", password: "" });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/user/register', formData);
            if (response) {
                toast.success("🎉 Signed up successfully!", { autoClose: 3000 });
                setTimeout(() => navigate("/login"), 3500); // Delay navigation
            } else {
                toast.error(response.data.message || "❌ Registration failed");
            }
        } catch (error) {
            toast.error(error.response?.data?.message || "❌ An error occurred during registration");
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gradient-to-r from-black via-gray-900 to-black text-white">
            <ToastContainer position="top-right" theme="dark" />
            <div 
                className="flex flex-col items-center p-10 bg-black bg-opacity-60 backdrop-blur-md border border-orange-500 rounded-2xl shadow-2xl max-w-md w-full transform transition duration-700 hover:scale-105 animate-fadeIn"
            >
                <h2 className="text-4xl font-extrabold mb-8 text-orange-500">Create Account</h2>
                <form onSubmit={handleSubmit} className="w-full">
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full p-4 mb-5 border border-orange-400 rounded-lg bg-black bg-opacity-50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full p-4 mb-5 border border-orange-400 rounded-lg bg-black bg-opacity-50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Enter your Password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        className="w-full p-4 mb-6 border border-orange-400 rounded-lg bg-black bg-opacity-50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                    <button 
                        type="submit"
                        className="w-full bg-orange-500 hover:bg-orange-700 cursor-pointer transition transform duration-300 text-white p-4 rounded-lg font-bold text-lg shadow-lg hover:scale-105 hover:shadow-orange-700"
                    >
                        Signup
                    </button>
                    <p className="flex justify-center mt-6 text-gray-300">
                        Already Registered?
                        <Link to="/login" className="text-orange-400 ml-2 font-semibold hover:underline">Login</Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Signup;
