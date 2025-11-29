import { useParams } from "react-router-dom";
import { ProductContext } from "../data/products";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const ProductDetails = () => {
    const{products}=useContext(ProductContext)
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);

  const product = products.find((p) =>String(p._id) === String(id));

  if (!product) return <h2>Product Not Found</h2>;

  return (
    <div className="container mt-4">
      <div className="row">

        <div className="col-md-6">
          <img src={product.image} className="img-fluid" alt={product.name} />
        </div>

        <div className="col-md-6">
          <h2>{product.name}</h2>
          <h3>₹{product.price}</h3>
          <p>{product.description}</p>

          <button
            className="btn btn-success"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        </div>

      </div>
    </div>
  );
};

export default ProductDetails;