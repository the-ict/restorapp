import React from 'react'

export default function MenuItems({ items, addCart }) {
  console.log(items)
  return (
    <div className='menuItems'>
      <h3>Menu items</h3>
      {
        items.map((item, index) => {
          return (
            <div className='cart card' key={item.id}>
              <h1>{item.name}</h1><p>{item.price}$</p>
              <button onClick={() => addCart(item)}>Qo'shish</button>
            </div>
          )
        })
      }
    </div>
  )
}
