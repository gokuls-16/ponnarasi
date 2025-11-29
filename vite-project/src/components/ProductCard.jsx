import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="card">
      <img src={product.image} className="card-img-top" alt={product.name} />

      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p>₹{product.price}</p>

        <Link to ={`/products/${product._id}`} className="btn btn-primary">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;