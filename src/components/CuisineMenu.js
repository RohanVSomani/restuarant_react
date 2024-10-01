import React from "react";

const CuisineMenu = ({ setSelectedCuisine }) => {
  return (
    <div className="cuisine-menu">
      <h2>Select Cuisine</h2>
      <button onClick={() => setSelectedCuisine("north")}>North Indian</button>
      <button onClick={() => setSelectedCuisine("south")}>South Indian</button>
      <button onClick={() => setSelectedCuisine("chinese")}>Chinese</button>
      <button onClick={() => setSelectedCuisine("beverages")}>Beverages</button>
    </div>
  );
};

export default CuisineMenu;
