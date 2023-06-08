import React from "react";
import "./Checkout.css";
const Checkout = () => {
  return (
    <div class="checkout-page">
      <div class="order-summary">
        <h2>Order Summary</h2>
        <p>Item 1 - $10</p>
        <p>Item 2 - $15</p>
        <p class="total">Total: $25</p>
      </div>

      <div class="payment-methods">
        <label>
          <input type="radio" name="payment-method" value="credit-card" />
          Credit Card
        </label>
        <label>
          <input type="radio" name="payment-method" value="paypal" />
          PayPal
        </label>
        <label>
          <input type="radio" name="payment-method" value="cash" />
          Cash on Delivery
        </label>
      </div>

      <a class="checkout-button" href="#">
        Place Order
      </a>
    </div>
  );
};

export default Checkout;
