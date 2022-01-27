import React from "react";
import "../App.css";

const Cat = ({image, name, origin, temperament}) => {
    return (
        <div className="cat">
            <div className="cat-image">
                <img src={image} alt="" />
            </div>
            <h3>{name}</h3>
            <h4>{temperament}</h4>
            <button>Add to Cart</button>
        </div>
    )
}

export default Cat;