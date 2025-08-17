import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, clearCart } from '../features/cart/cartSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const { items, totalAmount } = useSelector(state => state.cart);

  return (
    <div>
      <h2>Cart</h2>
      <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
      {items.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        items.map(item => (
          <div key={item.id} style={{ marginBottom: '1rem' }}>
            <h4>{item.title}</h4>
            <p>Qty: {item.quantity}</p>
            <p>Price: ${item.price * item.quantity}</p>
            <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
          </div>
        ))
      )}
      <h3>Total: ${totalAmount.toFixed(2)}</h3>
    </div>
  );
};

export default Cart;
