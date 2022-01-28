import React, { useEffect, useState } from "react";
import './App.css';
import Navbar from "./components/Navbar";
import Cat from "./components/Cat";
import Basket from "./components/Basket";

const App = () => {
  const [cats, setCats] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const [basketItem, setBasketItems] = React.useState([]);

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
    
  }

  return (
    <div className="app">
      <Navbar handleBasketClick={handleBasket}/>
      <div className="catlist">
        {cats.map(cat => (
          <Cat
          key={cat.id}
          image={cat.image.url}
          breed={cat.name}
          temperament={cat.temperament}
          handleAddClick={handleAddClick}
          />
        ))}
      </div>
      {open && <Basket onClose={handleBasket}/>}
    </div>
  )
}

export default App;


// import allCatsApi from './Api';
// import catsData from './data';

// const App = () => {

//   const [catImage, setCatImage] = React.useState('');

//   React.useEffect(() => {
//     allCatsApi.getCatImage()
//     .then((data) => {
//       setCatImage(data[0].url)
//     })
//     .catch((err) => console.log(err));
//   }, [])

//   return (
//     <div className="App">
//       <CatsList source={catImage}/>
//     </div>
//   );
// }

// const CatsList = ({source}) => {
//   return (
//     <div className="catlist">
//       {catsData.map((item, i) => (
//         <Cat
//           key={i}
//           source={source}  
//           name={item.name}
//           breed={item.breed}
//           price={item.price}
//         />
//         ))
//       }
//     </div>
//   )
// }

// const Cats = (props) => {
//   return (
//     <div className="cat">
      
//       <div className="cat-image">
//         <img src={props.source} alt={props.name}/>
//       </div>

//       <div className="cat-name">
//         <h4>{props.name}</h4>
//         <h5>{props.breed}</h5>
//       </div>
      
//       <h3>£{props.price}</h3>
//       <button>Add to Cart</button>
//     </div>
//   )
// }