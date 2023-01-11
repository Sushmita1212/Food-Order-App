import React from 'react'
// which will never be used but give better autocompletion
// here will have some items array ,since we manage some couple of cart itrmes
// and we have 2 func which will update that context,addItem()which will receive item and removeItem will receive id

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
})

export default CartContext
// now we get context generally created and also we have to managage that context
