import { useContext, useState } from "react";
import { ProductContext } from "../data/products";
import ProductCard from "./ProductCard";

export default function Products() {
  const { products } = useContext(ProductContext);

  // STATES
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState(""); // low / high
  const [page, setPage] = useState(1);

  const perPage = 6; // 6 products per page

  // --------------------------
  //  SEARCH FILTER
  // --------------------------
  let filteredProducts = products.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  // --------------------------
  //  SORTING
  // --------------------------
  if (sort === "low") {
    filteredProducts =filteredProducts .sort((a, b) => a.price - b.price);
  }
  if (sort === "high") {
    filteredProducts = filteredProducts.sort((a, b) => b.price - a.price);
  }

  // --------------------------
  //  PAGINATION
  // --------------------------
  const totalPages = Math.ceil(filteredProducts.length / perPage);

  const shownProducts = filteredProducts.slice(
    (page - 1) * perPage,
    page * perPage
  );

  return (
    <div className="container mt-4">

      {/* SEARCH & SORT */}
      <div className="d-flex gap-3 mb-3">
        <input
          type="text"
          placeholder="Search product..."
          className="form-control"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1);
          }}
        />

        <select
          className="form-select"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="">Sort</option>
          <option value="low">Price: Low → High</option>
          <option value="high">Price: High → Low</option>
        </select>
      </div>

      {/* PRODUCT LIST */}
      <div className="row g-3">
        {shownProducts.map((p) => (
          <div key={p._id} className="col-md-4">
            <ProductCard product={p} />
          </div>
        ))}
      </div>

      {/* PAGINATION BUTTONS */}
      <div className="d-flex justify-content-center mt-4">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
          <button
            key={num}
            className={`btn mx-1 ${
              page === num ? "btn-primary" : "btn-outline-primary"
            }`}
            onClick={() => setPage(num)}
          >
            {num}
          </button>
        ))}
      </div>
    </div>
  );
}