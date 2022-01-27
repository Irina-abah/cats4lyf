import React, { useEffect, useState } from "react";
import Cat from "./components/Cat";
import './App.css';

const App = () => {
  const [cats, setCats] = useState([])

  useEffect(() => {
    getCats()
  }, [])

  const getCats = async () => {
    const response = await fetch("https://api.thecatapi.com/v1/breeds?limit=12")
    const data = await response.json()
    console.log(data)
    setCats(data)
  }

  return (
    <div>
      <div className="catlist">
        {cats.map(cat => (
          <Cat
          key={cat.id}
          image={cat.image.url}
          name={cat.name}
          temperament={cat.temperament}
          />
        ))}
      </div>
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