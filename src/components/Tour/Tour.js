import React, { useState } from "react";
import "./Tour.scss";

export const Tour = ({ tour }) => {
  const [info, setInfo] = useState(false);

  function handleInfo() {
    setInfo(!info);
  }

  return (
    <article className="card bg-light">
      <img className="tour-img card-img-top" src={tour.img} alt={tour.city} />
      <div className="card-body">
        <h3 className="card-title text-info">{tour.city}</h3>
        <h4 className="card-title">{tour.name}</h4>
        {info && <p className="card-text">{tour.info}</p>}
        <button onClick={handleInfo} className="btn btn-info">
          Show Info
        </button>
      </div>
    </article>
  );
};
