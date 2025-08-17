import React, { useContext } from 'react'
import Card_Context from './Card_Context'

function ProductList() {
  // This component will render the list of products
  // You can use the addToCart function from context to add products to the cart
  const { addToCart } = useContext(Card_Context);

  const products = ['Apple', 'Banana', 'Cherry']; 
  return (
	<div className=''>
	  {products.map(product => (
		<>
		<div key={product}>
		<h2>{product}</h2>
		<button className='text-xl bg-gradient-to-br from-green-900 to-white rounded-sm p-1' onClick={() => addToCart(product)}>Add to Cart</button>
		</div>
		</>
	  ))}
	</div>
  )
}

export default ProductList
