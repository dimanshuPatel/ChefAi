import { Routes, Route, useLocation } from "react-router-dom";
import GenerateRecepie from "./pages/GenerateRecepie"
import Signup from "./pages/signup";
import Login from "./pages/login";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Hero from "./pages/hero";
import HeroNavbar from "./components/HeroNavbar"; // New Navbar for Hero Page
import Features from "./pages/Features";
import Product from "./pages/Product";
import MyRecipes from "./pages/MyRecepies";
import RecipePage from "./pages/RecipePage";

function App() {
  const location = useLocation();

  // Define routes where no navbar should be shown
  const hideNavbarRoutes = ["/register", "/login"];
  const heroNavbarRoutes = ["/hero", "/generate","/my-recipes", "/recipe"];

  return (
    <>
      {/* Conditionally render Navbar */}
      {!hideNavbarRoutes.includes(location.pathname) &&
        (heroNavbarRoutes.includes(location.pathname) ? (
          <HeroNavbar />
        ) :(
          <Navbar />
        ))}

      <Routes>
        <Route path="/register" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/generate" element={<GenerateRecepie />} />
        <Route path="/recipe" element={<RecipePage />} />
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/products" element={<Product />} />
        <Route path="/hero" element={<Hero />} />
        <Route path="/my-recipes" element={<MyRecipes />} />
      </Routes>
    </>
  );
}

export default App;
