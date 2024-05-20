import React from "react";
import { Link } from "react-router-dom";
import './Card.css'
const Card = ({ item }) => {
  return (
    <div style={{height:"200px"}} className="s2Card">
      <div className="s2CardImage">
        <img width={"100px"} height={"100px"} src={item.image} alt="" />
      </div>
      <h3>{item.title}</h3>
      <p>{item.price}</p>
      <Link to={`detail/${item._id}`}>
        Learn More <i class="fa-solid fa-arrow-right"></i>
      </Link>
    </div>
  );
};

export default Card;
