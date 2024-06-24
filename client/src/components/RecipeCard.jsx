import React from 'react';

const RecipeCard = ({ recipe }) => {
  // Function to render ingredients or instructions as a list of points
  const renderPoints = (text) => {
    // Split text by lines or other delimiter based on how your data is stored
    const lines = text.split('\n'); // Assuming each point is separated by a newline character

    // Render each line as a list item
    return (
      <ul>
        {lines.map((line, index) => (
          <li key={index}>{line}</li>
        ))}
      </ul>
    );
  };

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{recipe.title}</div>
        <p className="text-gray-700 text-base"><strong>Category:</strong> {recipe.category}</p>
        <div>
          <strong>Ingredients:</strong>
          {renderPoints(recipe.ingredients)}
        </div>
        <div>
          <strong>Instructions:</strong>
          {renderPoints(recipe.instructions)}
        </div>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {new Date(recipe.posted).toLocaleDateString()}
        </span>
      </div>
    </div>
  );
};

export default RecipeCard;
