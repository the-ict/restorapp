import React from 'react'
import MenuItems from "./components/MenuItems"
import CartItems from "./components/CartItems"
import OrderSummary from "./components/OrderSummary"

export default function App() {
  const [cart, setCart] = React.useState([])
  const [menuItems] = React.useState([
    { id: 1, name: 'Pizza', price: 12.99 },
    { id: 2, name: 'Burger', price: 8.99 },
    { id: 3, name: 'Pasta', price: 10.99 },
    { id: 4, name: 'Salad', price: 7.99 },
  ])


  function addCart(product) {
    setCart([...cart, product])
  }

  function removeFromCart(index) {
    console.log(index)
    setCart(cart.filter((item) => item.id !== index));
  }


  return (
    <div className='app'>
      <MenuItems items={menuItems} addCart={addCart} />
      <CartItems cartItems={cart} removeFromCart={removeFromCart} />
      <OrderSummary cartItems={cart} />
    </div>
  )
}
