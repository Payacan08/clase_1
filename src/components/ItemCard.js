import React from "react";
import { Link } from "react-router-dom";

const ItemCard = ({ data }) => {
  return (
    <Link to={`/productos/${data.id}`}>
      <div className="card w-96 bg-base-300 shadow-xl image-full">
        <img src={data.img}/>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{data.name}</h2>
          <div className="card bg-primary">
            {data.price}
          </div>
        </div>
      </div>
    </Link>    
  );
};

export default ItemCard;
