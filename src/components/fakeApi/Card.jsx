import React from "react";

const Card = (props) => {
  const { id, title, thumbnail, description, category, price, rating, stock } =
    props;
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={thumbnail} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card {title}</h5>
        <p className="card-text">{description}</p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Catogory : {category}</li>
        <li class="list-group-item">Price : {price}</li>
        <li class="list-group-item">Rating: {rating}</li>
        <li class="list-group-item">Stock: {stock}</li>

      </ul>
    </div>
  );
};

export default Card;
