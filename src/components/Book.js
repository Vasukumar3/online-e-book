// src/components/Book.js
import React, { useState } from 'react';

const Book = ({ title, author, pdfUrl }) => {
  const [subscribed, setSubscribed] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [subscriptionDetails, setSubscriptionDetails] = useState({
    name: '',
    number: '',
    email: '',
  });

  const handleSubscribe = () => {
    setShowForm(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission (e.g., API call, validation)
    // For now, just close the form
    setShowForm(false);
    setSubscribed(true);
  };

  return (
    <div>
      <h2>{title}</h2>
      <p>Author: {author}</p>
      <button onClick={handleSubscribe}>Download PDF</button>

      {showForm && (
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

      {subscribed && <p>Subscribed! You will receive a download link at {subscriptionDetails.email}</p>}
    </div>
  );
};

export default Book;
