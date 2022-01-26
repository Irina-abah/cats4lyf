import React from 'react';
import './App.css';
import allCatsApi from './Api';
import catsData from './data';

const App = () => {

  const [catImage, setCatImage] = React.useState('');

  React.useEffect(() => {
    allCatsApi.getCatImage()
    .then((data) => {
      setCatImage(data[0].url)
    })
    .catch((err) => console.log(err));
  }, [])

  return (
    <div className="App">
      <CatsList source={catImage}/>
    </div>
  );
}

const CatsList = ({source}) => {
  return (
    <div className="catlist">
      {catsData.map((item, i) => (
        <Cat
          key={i}
          source={source}  
          name={item.name}
          breed={item.breed}
          price={item.price}
        />
        ))
      }
      
    </div>
  )
}

const Cat = (props) => {
  return (
    <div className="cat">
      
      <div className="cat-image">
        <img src={props.source} alt={props.name}/>
      </div>

      <div className="cat-name">
        <h4>{props.name}</h4>
        <h5>{props.breed}</h5>
      </div>
      
      <h3>£{props.price}</h3>
      <button>Add to Cart</button>
      
    </div>
  )
}

export default App;
