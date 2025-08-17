import React from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

function App() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>🛒 Redux Toolkit Cart App</h1>
      <ProductList />
      <hr />
      <Cart />
    </div>
  );
}

export default App;
