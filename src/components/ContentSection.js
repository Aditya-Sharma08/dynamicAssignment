import React from "react";
import "./ContentSection.css";
import img2 from "..//images/dashboard-img.jpg";
import img1 from "..//images/test.png";
import { useSelector } from "react-redux";

const ContentSection = () => {
  const { address, phone, email } = useSelector((state) => state.contact);
  const cardsData = [
    {
      title: "Test Runner",
      description:
        "Get started with our free, open source Test Runner to write, run and debugging tests.",
      image: img1,
      buttonLabel: "$ npm install cypress",
      buttonLink: "#",
    },
    {
      title: "Cypress Dashboard",
      description:
        "Scale your test runs and debug failed tests in CI when you add the Cypress Dashboard.",
      image: img2,
      buttonLabel: "Sign up for free",
      buttonLink: "#",
    },
  ];

  return (
    <div className="content-section">
      <div className="card-container">
        {cardsData.map((card, index) => (
          <div className="card" key={index}>
            <img src={card.image} alt={`Card ${index + 1}`} />
            <div className="card-content">
              <h3>{card.title}</h3>
              <p>{card.description}</p>
              <a href={card.buttonLink} className="card-button">
                {card.buttonLabel}
              </a>
            </div>
          </div>
        ))}
      </div>
      <div>
        <h1>The hardest things about testing are easy with Cypress.</h1>
        <p>
          Our open source Test Runner is a fast and intuitive way to write, run
          debug your automated test.
        </p>
      </div>
      <div className="content-section">
        <h2>Contact Details</h2>
        <img
          src="https://www.cypress.io/images/layouts/navbar-brand.svg"
          alt=""
        />
        <div className="contact-details">
          <p>Address: {address}</p>
          <p>Phone: {phone}</p>
          <p>Email: {email}</p>
        </div>
      </div>
    </div>
  );
};

export default ContentSection;
