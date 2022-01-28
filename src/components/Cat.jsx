import React from "react";
import "../App.css";

const Cat = ({image, name, temperament}) => {

    const getPrice = () => {
        return Math.floor(Math.random() * (1000 - 200)) + 200;
    }

    return (
        <div className="cat">

            <div className="cat-info">
                <div className="cat-image">
                    <img src={image} alt="" />
                </div>
                <div className="cat-name">
                    <h4>{name}</h4>
                    <p>{temperament}</p>
                </div>
            </div>
            
            <div className="cat-buy">
                <h3>£{getPrice()}</h3>
                <button>Add to Cart</button>
            </div>
            
        </div>
    )
}

export default Cat;