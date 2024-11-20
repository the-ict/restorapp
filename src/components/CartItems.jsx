import React from 'react'

export default function CartItems({ removeFromCart, cartItems }) {
  if (cartItems.length === 0) return <p>Your cart is empty</p>
  return (
    <div className='cartItems'>
      <h3>Cart</h3>
      {
        cartItems.map(item => (
          <div className='cart card' key={item.id}>
            <h1>{item.name}</h1> <p>{item.price}</p>
            <button onClick={() => removeFromCart(item.id)}>O'chirish</button>
          </div>
        ))
      }
    </div>
  )
}
