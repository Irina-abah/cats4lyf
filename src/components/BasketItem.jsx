
const BasketItem = ({item}) => {

  return (
    <div>
      <img src={item.image} alt="" />
      <div>
        <h3>{item.name}</h3>
        <p>{item.temperament}</p>
      </div>
      <h3>{item.price}</h3>
    </div>
  )
}

export default BasketItem;