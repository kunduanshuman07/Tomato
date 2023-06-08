import React from "react";
import Navbar from "./components/Navbar";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import Contact from "./screens/Contact";
import About from "./screens/About";
import Home from "./screens/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OrderNow from "./screens/OrderNow";
import Restros from "./screens/Restros";
import Cart from "./screens/Cart";
import Checkout from "./screens/Checkout";
import Profile from "./screens/Profile";
const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/ordernow" element={<OrderNow />} />
          <Route path="/restro/:restroid" element={<Restros />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/profile" element={<Profile />} />

        </Routes>
      </Router>
    </div>
  );
};

export default App;
