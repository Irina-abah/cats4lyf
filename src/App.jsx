import './App.css';

const App = () => {
  return (
    <div className="App">
      <CatsList />
    </div>
  );
}

const CatsList = () => {
  return (
    <div className="catlist">
      <Cat
        source="https://images.unsplash.com/photo-1494256997604-768d1f608cac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1858&q=80"
        name="Whiskers"
        breed="British Shorthair"
        price="100.00"
        />
    </div>
  )
}

const Cat = (props) => {
  return (
    <div className="cat">
      
      <div className="cat-image">
        <img src={props.source} />
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
