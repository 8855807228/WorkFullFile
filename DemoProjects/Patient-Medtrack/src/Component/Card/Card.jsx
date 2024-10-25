import React from "react";
import "./Card.css"; // Import the CSS for the CardComponent

const Card = () => {
  return (
    <div className="welcome-section">
      <h1>
        Welcome Back <span className="highlighted">Mr. Patient</span>{" "}
        <span className="wave-emoji">👋</span>
      </h1>
      <p>There is the latest updates for the last 7 days. Check now</p>

      <div className="cards-container">
        <div className="card card-green">
          <p className="quote">Happiness</p>
          <p>is the highest form of health.</p>
          <p className="author">- Dalai Lama</p>
        </div>
        <div className="card card-white">
          <p className="quote">A Healthy Outside</p>
          <p>Starts From the Inside.</p>
          <p className="author">- Robert Urich</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
