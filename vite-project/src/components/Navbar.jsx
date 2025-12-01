import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

 const Navbar = () => {
  const { cart } = useContext(CartContext);

  return (
    <nav className="navbar navbar-dark bg-dark px-3">
      <Link to="/" className="navbar-brand">Gokul Ecommerece Shop</Link>
      <h1 className="btn btn-danger" >GOKUL</h1>
      <Link to="/admin" className="btn btn-warning">Admin</Link>
      <Link to="/cart" className="btn btn-light">
        Cart ({cart.length})
      </Link>
    </nav>
  );
};

export default Navbar;
