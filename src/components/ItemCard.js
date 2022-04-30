import React from "react";

const ItemCard = ({ data }) => {
  return (
    <div className="card w-96 bg-base-300 shadow-xl">
      <div className="card-body items-center text-center">
        <h2 className="card-title">{data.name}</h2>
        <p>{data.description}</p>
        <div className="card bg-primary">
          {data.price}
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
