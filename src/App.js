import React from 'react';
import ProductList from './Components/ProductList';
import Cart from './Components/Cart';
import './App.css';

function App() {
  return (
    <div className="container">
      <header className="my-4 text-center">
        <h1 className="display-4">Shopping Cart</h1>
        <p className="lead">Add items to your cart, update quantities, and check out!</p>
      </header>
      <div className="row">
        <div className="col-md-6">
          <ProductList />
        </div>
        <div className="col-md-6">
          <Cart />
        </div>
      </div>
    </div>
  );
}

export default App;
