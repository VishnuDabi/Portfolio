import React from "react";
import "./LatestNews.css";
const LatestNews = () => {
  return (
    <div className="latest-news-container" id="blog">
      <div className="latest-news-title-container">
        <h1>Latest News</h1>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration.
        </p>
      </div>
      <div className="latest-news-cards-container">
        <div className="latest-news-card   ">
          <div className="latest-news-card-img-1 child">
            <div className="news-card-text">
              <p>Development</p>
              <h1>Getting tickets to the big show</h1>
              <button className="view-details-btn">read more</button>
            </div>
          </div>
        </div>
        <div className="latest-news-card ">
          <div className="latest-news-card-img-2 child">
            <div className="news-card-text">
              <p>Management</p>
              <h1>A big ticket gone to be an interesting </h1>
              <button className="view-details-btn">read more</button>
            </div>
          </div>
        </div>
        <div className="latest-news-card ">
          <div className="latest-news-card-img-3 child">
            <div className="news-card-text">
              <p>Design</p>
              <h1>The Home of the Future Could Bebes</h1>
              <button className="view-details-btn">read more</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
