import CartIcon from '../Cart/CartIcon'
import classes from './HeaderCartButton.module.css'
import { useContext, useEffect, useState } from 'react'
import CartContext from '../../store/cart-context'

const HeaderCartButton = (props) => {
  // By using useContext here,this component will be re-evaluated by react whenever the context changes and changes & we do updated in the cardProvider comp and now we built the connection and now we use this to output our number of items

  //reduce will return array into single value,which takes 2 arugment func and initial value, funct takes 2 argum currVal and item which returns the results and than currval value wll be the result of previous,
  // currentValue+item.amount[my cart item object will have amount field which stores the number of item per item type]

  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false)
  const cartCtx = useContext(CartContext)

  const { items } = cartCtx

  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount
  }, 0)

  const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`

  useEffect(() => {
    if (items.length === 0) {
      return
    }
    setBtnIsHighlighted(true)

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false)
    }, 300)

    return () => {
      clearTimeout(timer)
    }
  }, [items])

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  )
}

export default HeaderCartButton
