import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Cart.css";
const Cart = () => {
  const currentUser = localStorage.getItem("currentUser");
  const userid = currentUser ? JSON.parse(currentUser)._id : null;
  const [foodData, setFoodData] = useState([]);
  useEffect(() => {
    async function fetchFoodData() {
      const foodData = await axios.get(`/api/users/getfooddata/${userid}`);
      setFoodData(foodData.data);
    }
    fetchFoodData();
  }, []);
  return (
    <div class="cart-page">
      {foodData.length === 0 ? (
        <p>Loading...</p>
      ) : (
        foodData.map((item)=>(
          <div class="food-item" >
          <img src="food1.jpg" alt="Food 1" />
          <h3>{item.name}</h3>
          <p>Price: INR {item.price}.00</p>
          <p>Cuisine: {item.cuisine}</p>
          <a href="#">Remove</a>
        </div>
        ))
      )}
      <a class="checkout-button" href="/checkout">
        Checkout
      </a>
    </div>
  );
};

export default Cart;
