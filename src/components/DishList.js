import React from "react";

const DishList = ({ dishes, addToCart }) => {
  return (
    <ul className="dish-list">
      {dishes.length > 0 ? (
        dishes.map((dish, index) => (
          <li key={index} className="dish-item">
            <img src={dish.image} alt={dish.name} style={{ width: '100px', height: '100px', marginRight: '10px' }} />
            <div>
              <h3>{dish.name}</h3>
              <p>{dish.description}</p>
            </div>
            <button onClick={() => addToCart(dish.name)}>Add</button>
          </li>
        ))
      ) : (
        <li>No dishes found.</li>
      )}
    </ul>
  );
};

export default DishList;
