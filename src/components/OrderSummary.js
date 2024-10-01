import React from "react";

const OrderSummary = ({ cart, onPlaceOrder }) => {
  return (
    <div className="order-summary">
      <h2>Order Summary</h2>
      <ul>
        {cart.length > 0 ? (
          cart.map((item, index) => <li key={index}>{item}</li>)
        ) : (
          <li>No items in cart.</li>
        )}
      </ul>
      <h3>Total Items: {cart.length}</h3>
      {cart.length > 0 && <button onClick={onPlaceOrder}>Place Order</button>}
    </div>
  );
};

export default OrderSummary;
