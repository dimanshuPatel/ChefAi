const RecipeDisplay = ({ recipe }) => {
    return (
      recipe && (
        <div className="recipe-box">
          <h2>Generated Recipe</h2>
          <p>{recipe}</p>
        </div>
      )
    );
  };
  
  export default RecipeDisplay;
  