import { useContext } from "react";
import { ProductContext } from "../data/products";
import ProductCard from "./ProductCard";

const ProductList = () => {
    const {products}  = useContext(ProductContext)
  return (
    <div className="container mt-4">
      <h3>Products</h3>

      <div className="row">
        {products.map((product) => (
          <div className="col-md-4 mb-3" key={product._id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;