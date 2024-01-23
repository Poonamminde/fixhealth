import React from "react";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import "./card.css";

const Card = ({ name, description, rating }) => {
  return (
    <div class="card">
      <div class="name">{name}</div>
      <div class="description">
        <p>{description}</p>
      </div>
      <Rating
        name="text-feedback"
        value={rating}
        readOnly
        precision={0.5}
        emptyIcon={
          <StarIcon
            style={{ opacity: 0.55, color: "black" }}
            fontSize="inherit"
          />
        }
      />
    </div>
  );
};

export default Card;
