import React from "react";
import "./Portfolio.css";
const Portfolio = () => {
  return (
    <>
      <section className="portfolio-section">
        <div className="portfolio-container" id="portfolio">
          <div className="portfolio-title-container">
            <h1>My Latest Project</h1>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration.
            </p>
          </div>
          <div className="portfolio-item-section">
            <div className="portfolio-item ">
              <div className="portfolio-img-1 child">
                <div className="portfolio-item-text">
                  <p>Development</p>
                  <h1>Getting tickets to the big show</h1>
                  <button>View Details</button>
                </div>
              </div>
            </div>
            <div className="portfolio-item  ">
              <div className="portfolio-img-2 child"></div>
              <div className="portfolio-item-text">
                <p>Development</p>
                <h1>Getting tickets to the big show</h1>
                <button>View Details</button>
              </div>
            </div>
            <div className="portfolio-item  ">
              <div className="portfolio-img-3 child"></div>
              <div className="portfolio-item-text">
                <p>Development</p>
                <h1>Getting tickets to the big show</h1>
                <button>View Details</button>
              </div>
            </div>
            <div className="portfolio-item ">
              <div className="portfolio-img-4 child"></div>
              <div className="portfolio-item-text">
                <p>Development</p>
                <h1>Getting tickets to the big show</h1>
                <button>View Details</button>
              </div>
            </div>
            <div className="portfolio-item  ">
              <div className="portfolio-img-3 child"></div>
              <div className="portfolio-item-text">
                <p>Development</p>
                <h1>Getting tickets to the big show</h1>
                <button>View Details</button>
              </div>
            </div>
            <div className="portfolio-item ">
              <div className="portfolio-img-4 child"></div>
              <div className="portfolio-item-text">
                <p>Development</p>
                <h1>Getting tickets to the big show</h1>
                <button>View Details</button>
              </div>
            </div>
          </div>
          <br />
          <div className="buy-now-btn-container">
            <button className="portfolio-buy-btn">view more</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
