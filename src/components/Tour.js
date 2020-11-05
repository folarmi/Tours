import React, { useState } from "react";

const Tour = ({ id, title, price, details, image, removeTour }) => {
  const [isReadMore, setIsReadMore] = useState(false);

  return (
    <article className="card">
      <img src={image} alt={title} />
      <footer>
        <div className="card-body">
          <div className="tour-info">
            <h4>{title} </h4>
            <h4 className="tour-price">&#8358;{price}</h4>
          </div>
        </div>
        <p>
          {isReadMore ? details : `${details.substring(0, 200)}...`}
          <button
            className="toggle-button"
            onClick={() => setIsReadMore(!isReadMore)}
          >
            {isReadMore ? "Show Less" : "Read More"}
          </button>
        </p>
        <button onClick={() => removeTour(id)} className="card-button">
          Not interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;

// onClick={() => removeCity(id)}
