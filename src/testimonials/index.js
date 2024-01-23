import React from "react";
import Card from "./Card";
import "./index.css";

const index = () => {
  return (
    <div>
      <h1 id="heading">Our Happy Customers</h1>
      <div id="testi-container">
        <Card
          name="Priya Sharma"
          description="My leg was paing from last few months. But know I am feeling relief"
          rating="3.5"
        />
        <Card
          name="Kirti Mehra"
          description="My leg was paing from last few months. But know I am feeling relief"
          rating="4"
        />
        <Card
          name="Amar Gupta"
          description="My leg was paing from last few months. But know I am feeling relief"
          rating="4.5"
        />
        <Card
          name="Kewal Rathod"
          description="My leg was paing from last few months. But know I am feeling relief"
          rating="4"
        />
      </div>
    </div>
  );
};

export default index;
