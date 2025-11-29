import { useState, useContext } from "react";
import { ProductContext } from "../src/data/products";
import {useNavigate} from "react-router-dom"

export default function AddProduct() {
  const { products, setProducts } = useContext(ProductContext);
  const navigate = useNavigate()
  const [form, setForm] = useState({ name: "", price: "", image: "", description: "" });

  const submit = (e) => {
    e.preventDefault();
    const newProduct = { ...form, id: Date.now() };
    setProducts([...products, newProduct]);
    navigate("/admin/products")
  };

  return (
    <div className="container mt-4">
      <h3>Add Product</h3>

      <form className="mt-3" onSubmit={submit}>
        <input className="form-control mb-2" placeholder="Name"
          onChange={(e) => setForm({ ...form, name: e.target.value })} />

        <input className="form-control mb-2" placeholder="Price"
          onChange={(e) => setForm({ ...form, price: e.target.value })} />

        <input className="form-control mb-2" placeholder="Image URL"
          onChange={(e) => setForm({ ...form, image: e.target.value })} />

        <textarea className="form-control mb-2" placeholder="Description"
          onChange={(e) => setForm({ ...form, description: e.target.value })}></textarea>

        <button className="btn btn-success">Add Product</button>
      </form>
    </div>
  );
}