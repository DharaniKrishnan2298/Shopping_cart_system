import React from 'react';
import { useDispatch } from 'react-redux';
import { updateQuantity, removeItem } from '../redux/cartSlice';

function CartItem({ item }) {
  const dispatch = useDispatch();

  const handleQuantityChange = (e) => {
    dispatch(updateQuantity({ id: item.id, quantity: Number(e.target.value) }));
  };

  const handleRemove = () => {
    dispatch(removeItem({ id: item.id }));
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <span>
        {item.name} - ${item.price.toFixed(2)}
      </span>
      <div className="d-flex align-items-center">
        <input
          type="number"
          className="form-control form-control-sm me-2"
          min="1"
          value={item.quantity}
          onChange={handleQuantityChange}
          style={{ width: '60px' }}
        />
        <button className="btn btn-sm btn-danger" onClick={handleRemove}>
          Remove
        </button>
      </div>
    </li>
  );
}

export default CartItem;
