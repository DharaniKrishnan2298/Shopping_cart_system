import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';

function Cart() {
  const items = useSelector(state => state.cart.items);

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="card shadow-sm">
      <div className="card-header bg-success text-white">
        <h2>Cart</h2>
      </div>
      <div className="card-body">
        {items.length === 0 ? (
          <p className="text-muted">Your cart is empty.</p>
        ) : (
          <ul className="list-group">
            {items.map(item => (
              <CartItem key={item.id} item={item} />
            ))}
          </ul>
        )}
        <h3 className="mt-3">Total: ${total.toFixed(2)}</h3>
      </div>
    </div>
  );
}

export default Cart;
