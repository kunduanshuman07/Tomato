import React from "react";
import "./About.css";
import logo from "../assets/Logo.PNG";
const About = () => {
  return (
    <div class="about-container">
      <div class="about-card">
        <h2>About Tomato</h2>
        <img src={logo} alt="Tomato Logo" />
        <p>
          Tomato is a leading food delivery app that brings delicious meals
          right to your doorstep. With a wide range of restaurants to choose
          from and a user-friendly interface, Tomato makes ordering food quick
          and convenient.
        </p>
        <p>
          Our mission is to satisfy your cravings by delivering high-quality
          meals from local restaurants. Whether you're in the mood for pizza,
          sushi, or something sweet, Tomato has got you covered. We partner with
          top-rated eateries to ensure you receive fresh, tasty food every time.
        </p>
        <p>
          Ordering from Tomato is simple. Just browse through the app, explore
          various menus, and place your order with a few taps. Our reliable
          delivery partners will ensure that your food arrives hot and on time.
          You can track your order in real-time and enjoy the convenience of
          contactless delivery.
        </p>
        <p>
          Join the millions of satisfied customers who rely on Tomato for their
          food delivery needs. Download the app today and start enjoying
          delicious meals from your favorite restaurants.
        </p>
        <p class="highlight">Taste the difference with Tomato!</p>
      </div>
    </div>
  );
};

export default About;
