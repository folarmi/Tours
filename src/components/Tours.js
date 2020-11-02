import React, { useState } from "react";
import Tour from "./Tour";

const Tours = ({ tours, removeTour }) => {
  return (
    <section className="main">
      <div className="title">
        <h2>Our Tours</h2>
        <div className="underline"></div>
      </div>
      <div>
        {tours.map((city) => {
          return <Tour key={city.id} {...city} removeTour={removeTour}></Tour>;
        })}
      </div>
    </section>
  );
};

export default Tours;
