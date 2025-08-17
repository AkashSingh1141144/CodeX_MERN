import React, { useContext } from 'react'
import Card_Context from './Card_Context'

function Card_Icon() {
	const {cart} = useContext(Card_Context)
  return (
	<div className=''>
		<h2>🛒 Items in Cart: {cart.length}</h2>
	</div>
  )
}

export default Card_Icon
