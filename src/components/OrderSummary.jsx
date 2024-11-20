import React from 'react'

export default function OrderSummary({ cartItems }) {

  console.log(cartItems)
  if (cartItems.length === 0) return <p>Your cart is empty</p>

  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0)

  return (
    <div className='orderSummary'>
      <h3>Order Summary</h3>
      {
        cartItems.map((item, index) => (
          <div className='cart order card' key={index}>
            <h1>{item.name}</h1> <p>{item.price}</p>
          </div>
        ))
      }
      <div className='orderSummary-total'>
        <p>{totalPrice.toFixed(2)}$</p>
        <button className='total-button'>Order</button>
      </div>
    </div>
  )
}
