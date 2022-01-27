import React from 'react';

const Basket = ({children, onClose}) => {

//  const totalPrice = data.reduce(
//     function (sum, item) {
//       return sum + item.price
//     }, 0
//   )

  function handleClick(evt) {
    onClose()
  }

  React.useEffect(() => {
  function handleEscClose(evt) {
    if (evt.key === 'Escape') {
      console.log(evt.target)
      onClose();
    }
  }
  document.addEventListener('keydown', handleEscClose);
  return () => {
  document.removeEventListener('keydown', handleEscClose);
  }
  }, [onClose]);

  const buttonClass = (`${children ? "button_type_checkout" : "button_disabled"}`); 


  return (
    <>
      <div className="overlay" onMouseDown={handleClick}></div>
        <div className="basket">
          <button 
            type="button" 
            className="button_type_close" 
            onClick={onClose}
            aria-label="close"> 
          </button>
          <h2 className="title">Items in your basket</h2>
          <div className="cart-items">
            {children}
          </div>
          <h3 className="subtotal">Subtotal: value to calculate</h3>
          <div className="buttons">
            <button 
              type="button"
              className={buttonClass}
              aria-label="checkout"
            >
              PROCEED TO CHECKOUT</button>
            <a className="checkout-link" href="/">Or continue shopping</a>
          </div>
        </div>  
    </>
  )
}
export default Basket;