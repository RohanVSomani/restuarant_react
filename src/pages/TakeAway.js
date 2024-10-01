import { useState } from "react";
import CuisineMenu from "../components/CuisineMenu";
import DishList from "../components/DishList";
import OrderSummary from "../components/OrderSummary";

import p1 from "../img/panneer.jpeg"
const fetchDishesByCuisine = (cuisine) => {
  const allDishes = {
    north: [
      {
        name: "Paneer Tikka",
        image: p1, 
        description: "Grilled paneer marinated in spices."
      },
      {
        name: "Butter Chicken",
        image: p1, 
        description: "Chicken in a creamy tomato sauce."
      },
      {
        name: "Naan",
        image: p1, 
        description: "Soft Indian bread."
      },
    ],
    south: [
      {
        name: "Dosa",
        image: p1, 
        description: "Crispy crepe made from fermented rice and lentils."
      },
      {
        name: "Idli",
        image: p1, 
        description: "Steamed rice cakes."
      },
      {
        name: "Sambar",
        image:p1, 
        description: "Lentil-based vegetable stew."
      },
    ],
    chinese: [
      {
        name: "Spring Rolls",
        image: p1, 
        description: "Crispy rolls filled with vegetables."
      },
      {
        name: "Fried Rice",
        image:p1, 
        description: "Stir-fried rice with vegetables and soy sauce."
      },
      {
        name: "Noodles",
        image:p1, 
        description: "Wheat noodles stir-fried with vegetables."
      },
    ],
    beverages: [
      {
        name: "Lassi",
        image: p1, 
        description: "Yogurt-based drink."
      },
      {
        name: "Tea",
        image: p1, 
        description: "Brewed tea leaves."
      },
      {
        name: "Coffee",
        image: p1, 
        description: "Brewed coffee."
      },
    ],
  };

  return allDishes[cuisine] || [];
};

const TakeAway = () => {
  const [selectedCuisine, setSelectedCuisine] = useState(null);
  const [cart, setCart] = useState([]);
  const [searchQuery, setSearchQuery] = useState([]);
  const [dishes, setDishes] = useState([]);

  const addToCart = (dishName) => {
    const newCart = [...cart, dishName];
    setCart(newCart);
    // Update local storage for persistence
    localStorage.setItem('cart', JSON.stringify(newCart));
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleCuisineChange = (cuisine) => {
    setSelectedCuisine(cuisine);
    const fetchedDishes = fetchDishesByCuisine(cuisine);
    setDishes(fetchedDishes);
    setSearchQuery(""); // Clear search when changing cuisine
  };

  const filteredDishes = dishes.filter(dish =>
    dish.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handlePlaceOrder = () => {
    // Get existing orders from local storage or initialize as empty array
    const existingOrders = JSON.parse(localStorage.getItem('orders')) || [];
    const orderNumber = existingOrders.length + 1; // Generate a new order number
    const newOrder = `Order #${orderNumber}: ${cart.join(", ")}`;
    
    // Update local storage with new order
    localStorage.setItem('orders', JSON.stringify([...existingOrders, newOrder]));
    
    // Clear the cart after placing the order
    setCart([]);
    localStorage.removeItem('cart'); // Clear cart from local storage
    alert(`Order placed successfully!\n${newOrder}`);
  };

  return (
    <div className="takeaway">
      <div className="aside">
        <CuisineMenu setSelectedCuisine={handleCuisineChange} />
      </div>
      <div className="main-content">
        {selectedCuisine ? (
          <>
            <input
              type="text"
              placeholder="Search dishes..."
              value={searchQuery}
              onChange={handleSearch}
              style={{ marginBottom: "1rem", padding: "0.5rem" }}
            />
            <DishList dishes={filteredDishes} addToCart={addToCart} />
            <OrderSummary cart={cart} onPlaceOrder={handlePlaceOrder} />
          </>
        ) : (
          <p>Please select a cuisine</p>
        )}
      </div>
    </div>
  );
};

export default TakeAway;
