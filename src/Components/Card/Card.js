import React, { useState } from "react";
import "./Card.scss";
function Card({title,desc}) {
    // const [tit,setTit]=useState(title)
  return (
    <div className="card">

      <div className="head">{title}</div>
      <p className="para">
      {desc}
      </p>
    </div>
  );
}

export default Card;
