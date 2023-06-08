import React from "react";
import Footer from "../components/Footer";
import "./Home.css";
const Home = () => {
  return (
    <>
      <section class="hero-section">
        <div class="hero-content">
          <h1>Order Delicious Food Online</h1>
          <p>Get your favorite meals delivered to your doorstep.</p>
          <a href="/Ordernow" class="btn">
            Order Now
          </a>
        </div>
      </section>

      <section class="featured-restaurants-section">
        <h2>Featured Restaurants</h2>
        <div class="featured-restaurants-list">
          <div class="featured-restaurant">
            <img src="path_to_restaurant1_image.jpg" alt="Restaurant 1" />
            <h3>Restaurant 1</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div class="featured-restaurant">
            <img src="path_to_restaurant2_image.jpg" alt="Restaurant 2" />
            <h3>Restaurant 2</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div class="featured-restaurant">
            <img src="path_to_restaurant3_image.jpg" alt="Restaurant 3" />
            <h3>Restaurant 3</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </section>

      <section class="how-it-works-section">
        <h2>How It Works</h2>
        <div class="how-it-works-steps">
          <div class="how-it-works-step">
            <img src="path_to_step1_icon.png" alt="Step 1" />
            <h3>Step 1</h3>
            <p>Choose your favorite restaurant</p>
          </div>
          <div class="how-it-works-step">
            <img src="path_to_step2_icon.png" alt="Step 2" />
            <h3>Step 2</h3>
            <p>Place your order and customize it</p>
          </div>
          <div class="how-it-works-step">
            <img src="path_to_step3_icon.png" alt="Step 3" />
            <h3>Step 3</h3>
            <p>Track your delivery in real-time</p>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default Home;
