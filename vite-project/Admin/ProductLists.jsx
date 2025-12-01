import { useContext } from "react";
import { ProductContext } from "../src/data/products";
import { Link } from "react-router-dom";
import { CartContext } from "../src/context/CartContext";

export default function ProductLists() {
  const { products, setProducts } = useContext(ProductContext);
const{cart,setCart}=useContext(CartContext)
  const deleteProduct = (_id) => {
    setProducts(products.filter((p) => p._id !== _id));
    setCart(cart.filter((item) => item._id !== _id))
  };

  return (
    <div className="container mt-4">
      <h3>Product Management</h3>

      <Link to="/admin/add" className="btn btn-success mb-3">Add Product</Link>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th><th>Price</th><th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {products.map((p) => (
            <tr key={p.id}>
              <td>{p.name}</td>
              <td>₹{p.price}</td>

              <td>
                <Link to={`/admin/edit/${p._id}`} className="btn btn-primary btn-sm me-2">Edit</Link>

                <button onClick={() => deleteProduct(p._id)} className="btn btn-danger btn-sm">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
}