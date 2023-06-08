import React, { useEffect, useState } from "react";
import { useParams} from "react-router-dom";
import "./Restros.css";
import axios from "axios";
const Restros = () => {
  const currentUser = localStorage.getItem("currentUser");
  const userid = currentUser ? JSON.parse(currentUser)._id : null;
  const { restroid } = useParams();
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    async function fetchFoodData() {
      const response = await axios.get(
        `/api/restros/getFoodByRestro/${restroid}`
      );
      
      setFoods(response.data);
    }
    fetchFoodData();
  }, []);
  async function addToCart(event,item){
    const details={
      userid,item
    };
    const response = (await axios.post('/api/users/addToCart',details)).data;
    localStorage.setItem("currentUser", JSON.stringify(response));
    window.location.href = "/cart";
  }
  return (
    <div className="restaurant-page">
      <div className="category">
        {/* <h2>Appetizers</h2> */}
        {foods.length === 0 ? (
          <p>Loading...</p>
        ) : (
          foods.map((item) => (
            <div className="food-item" key={item.restroid}>
              <img src="" alt="Food 1" />
              <h3>{item.name}</h3>
              <p>{item.cuisine}</p>
              <p>INR {item.price}.00</p>
              <button onClick={(event) => addToCart(event,item)}>Add to Cart</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Restros;
