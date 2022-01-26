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
        <Cat
        source="https://images.unsplash.com/photo-1573865526739-10659fec78a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGNhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        name="Mittens"
        breed="Persian"
        price="89.00"
        />
        <Cat
        source="https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1092&q=80"
        name="Luna"
        breed="British Shorthair"
        price="99.00"
        />
        <Cat
        source="https://images.unsplash.com/photo-1568470010257-111aa304d53b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1168&q=80"
        name="Snowy"
        breed="Ragdoll"
        price="70.00"
        />
        <Cat
        source="https://images.unsplash.com/photo-1511275539165-cc46b1ee89bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        name="Suny"
        breed="British Shorthair"
        price="79.00"
        />
        <Cat
        source="https://images.unsplash.com/photo-1519052537078-e6302a4968d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60"
        name="Butter"
        breed="Maine Coon"
        price="90.00"
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
