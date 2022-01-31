import React, { useEffect, useState } from "react";
import './App.css';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Cat from "./components/Cat";
import Footer from "./components/Footer"
import Basket from "./components/Basket";

const App = () => {
  const [cats, setCats] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const [basketItems, setBasketItems] = React.useState([]);

  const [limit, setLimit] = React.useState(16);
  const [page, setPage] = React.useState(0);

  React.useEffect(() => {
    getCats()
  }, [])

  const getCats = async () => {
    const response = await fetch(`https://api.thecatapi.com/v1/breeds?limit=${limit}&page=${page}&order=asc`)
    const data = await response.json()
    console.log(data)
    setCats(data)
  }

  function handleBasket() {
    setOpen(!open)
  }

  function handleAddClick(cat) {
    // const clicked = cats.some((item) => item.id === cat.id);
    // setBasketItems(clicked)

  }

  return (
    <div className="app">
      <Navbar handleBasketClick={handleBasket}/>
      <Header />
      <div id="cats" className="catlist-box">
        <h2>Browse cats for sale</h2>
        <div className="catlist">
          {cats.map(cat => (
            <Cat
            key={cat.id}
            image={cat.image.url}
            breed={cat.name}
            temperament={cat.temperament}
            onAddClick={handleAddClick}
            />
          ))}
        </div>
      </div>
      <Footer />
      {open && 
      <Basket 
        onClose={handleBasket}
        addedCats={cats}
        />}
    </div>
  )
}

export default App;