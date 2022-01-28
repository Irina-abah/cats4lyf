import React from "react";
import "../App.css";
import faker from "faker";

const Cat = ({image, breed, temperament, handleClick, onAddClick}) => {

    const getName = () => {
        let fakerName = faker.name.firstName();
        return fakerName;
    }

    const getPrice = () => {
        // return Math.floor(Math.random() * (1000 - 200)) + 200;
        let fakerPrice = faker.datatype.number({min: 200, max: 1000});
        return fakerPrice;
    }

    const handleAddClick = () => {
      onAddClick({image, breed, temperament, handleClick});
  }

    return (
        <div className="cat">

            <div className="cat-info">
                <div className="cat-image">
                    <img src={image} alt="" />
                </div>
                <div className="cat-name">
                    <h3>{getName()}</h3>
                    <h4>{breed}</h4>
                    <p>{temperament}</p>
                </div>
            </div>
            
            <div className="cat-buy">
                <h3>£{getPrice()}</h3>
                <button onClick={handleAddClick}>Add to Cart</button>
            </div>
            
        </div>
    )
}

export default Cat;