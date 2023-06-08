import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import "./OrderNow.css";
const OrderNow = () => {
  const [restros, setRestros] = useState([]);
  useEffect(() => {
    async function fetchRestros() {
      const response = await axios.get("/api/restros/allrestros");
      setRestros(response.data);
      console.log(restros);
    }
    fetchRestros();
  }, []);
  return (
    <section className="restaurant-list-section">
      {restros.length === 0 ? (
        <p>Loading...</p>
      ) : (
        restros.map((restro) => (
          <div className="restaurant" key={restro._id}>
            <img src="restaurant1.jpg" alt="Restaurant 1" />
            <h3>{restro.name}</h3>
            <p>
              Location: {restro.locality}, {restro.city}, {restro.state}
            </p>
            <p>Cuisine: {restro.cuisine}</p>
            <Link to={`/restro/${restro._id}`}>Order Now</Link>
          </div>
        ))
      )}
    </section>
  );
};

export default OrderNow;
