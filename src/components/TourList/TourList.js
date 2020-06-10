import React, { useState } from "react";
import { Tour } from "../Tour/Tour";
import { tourData } from "../../tourData";
import "./TourList.scss";

export const TourList = () => {
  const [tours, setTours] = useState(tourData);

  return (
    <section className="tour-list">
      {tours.map((tour) => {
        return <Tour key={tour.id} tour={tour} />;
      })}
    </section>
  );
};
