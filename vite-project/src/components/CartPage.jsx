import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartPage = () => {
  const { cart, addToCart, decreaseQty, removeFromCart } =
    useContext(CartContext);

  return (
    <div className="container mt-4">
      <h3>Your Cart</h3>

      {cart.length === 0 && (
        <h5 className="mt-3 text-muted">Cart is empty</h5>
      )}

      {cart.map((item) => (
        <div
          key={item._id}
          className="d-flex align-items-center justify-content-between border p-2 mb-2 rounded"
        >
          {/* product image */}
          <img
            src={item.image}
            width="80"
            height="80"
            className="rounded"
            alt={item.name}
          />

          {/* product info */}
          <div className="flex-grow-1 ms-3">
            <h5 className="mb-1">{item.name}</h5>
            <p className="mb-1">₹{item.price}</p>

            {/* quantity buttons */}
            <div>
              <button
                className="btn btn-secondary btn-sm"
                onClick={() => decreaseQty(item._id)}
              >
                -
              </button>

              <span className="mx-2 fw-bold">{item.qty}</span>

              <button
                className="btn btn-secondary btn-sm"
                onClick={() => addToCart(item)}
              >
                +
              </button>
            </div>
          </div>

          {/* remove button */}
          <div>
            <button
              className="btn btn-danger btn-sm"
              onClick={() => removeFromCart(item._id)}
            >
              Remove
            </button>
          </div>
        </div>
      ))}

      {/* Total Price */}
      {cart.length > 0 && (
        <div className="mt-3 p-3 bg-light rounded border">
          <h4>
            Total: ₹
            {cart.reduce((acc, item) => acc + item.price * item.qty, 0)}
          </h4>
        </div>
      )}
    </div>
  );
};

export default CartPage;