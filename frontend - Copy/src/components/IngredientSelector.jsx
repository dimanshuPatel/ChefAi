import { useState } from "react";

const IngredientSelector = ({ onGenerate }) => {
  const [ingredients, setIngredients] = useState("");

  const handleGenerate = () => {
    const ingredientList = ingredients.split(",").map(i => i.trim());
    onGenerate(ingredientList);
  };

  return (
    <div className="input-container">
      <input 
        type="text" 
        placeholder="Enter ingredients, comma-separated" 
        value={ingredients} 
        onChange={(e) => setIngredients(e.target.value)}
      />
      <button onClick={handleGenerate} className="button">
        Generate Recipe
      </button>
    </div>
  );
};

export default IngredientSelector;
