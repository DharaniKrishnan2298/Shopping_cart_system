import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/cartSlice';

const products = [
  { id: 1, name: 'Apple', price: 1 },
  { id: 2, name: 'Banana', price: 0.5 },
  { id: 3, name: 'Cherry', price: 2 },
];

function ProductList() {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addItem({ ...product, quantity: 1 }));
  };

  return (
    <div className="card shadow-sm">
      <div className="card-header bg-primary text-white">
        <h2>Products</h2>
      </div>
      <div className="card-body">
        <ul className="list-group">
          {products.map(product => (
            <li key={product.id} className="list-group-item d-flex justify-content-between align-items-center">
              <span>
                {product.name} - <strong>${product.price.toFixed(2)}</strong>
              </span>
              <button
                className="btn btn-sm btn-success"
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProductList;
