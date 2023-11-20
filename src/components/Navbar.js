// src/components/Navbar.js
import React, { useState } from 'react';

const Navbar = () => {
  const [showSubscribeForm, setShowSubscribeForm] = useState(false);
  const [subscriptionDetails, setSubscriptionDetails] = useState({
    name: '',
    number: '',
    email: '',
  });

  const handleSubscribeClick = () => {
    setShowSubscribeForm(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission (e.g., API call, validation)
    // For now, just close the form
    setShowSubscribeForm(false);
    console.log('Subscription details:', subscriptionDetails);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <span>Home</span>
      </div>
      <div className="navbar-center">
        <span>Online E-Book Store</span>
      </div>
      <div className="navbar-right">
        <button onClick={handleSubscribeClick}>Subscribe</button>
        <button>Sign In</button>
      </div>

      {showSubscribeForm && (
        <div className="subscription-form">
          <form onSubmit={handleFormSubmit}>
            <label>
              Name:
              <input
                type="text"
                value={subscriptionDetails.name}
                onChange={(e) => setSubscriptionDetails({ ...subscriptionDetails, name: e.target.value })}
              />
            </label>
            <label>
              Number:
              <input
                type="text"
                value={subscriptionDetails.number}
                onChange={(e) => setSubscriptionDetails({ ...subscriptionDetails, number: e.target.value })}
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                value={subscriptionDetails.email}
                onChange={(e) => setSubscriptionDetails({ ...subscriptionDetails, email: e.target.value })}
              />
            </label>
            <button type="submit">Subscribe</button>
          </form>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
