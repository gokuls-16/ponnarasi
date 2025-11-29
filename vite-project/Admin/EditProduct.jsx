import { useParams,useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../src/data/products";

export default function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate()
  const { products, setProducts } = useContext(ProductContext);

  const product = products.find((p) =>String (p._id) === String(id) || String (p.id) === String(id));

  const [form, setForm] = useState({name:"",price:"",image:"",description:""});
  useEffect(()=>{
    if(product){
        setForm({
            name:product.name,
            price:product.price,
            image:product.image,
            description:product.description,

        })
    }
  },[product])

  if(!product){
    return <h3 className="text-danger text-center mt-4">Product Not Found</h3>
  }

  const submit = (e) => {
    e.preventDefault();
    const updated = products.map((p) =>String(p._id) === String(id)  || String (p.id) === String(id)  ?  {...p ,... form} : p);
    setProducts(updated);
    navigate("/admin/products")
  };

  return (
    <div className="container mt-4">
      <h3>Edit Product</h3>

      <form className="mt-3" onSubmit={submit}>
        <input className="form-control mb-2"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })} />

        <input className="form-control mb-2"
          value={form.price}
          onChange={(e) => setForm({ ...form, price: e.target.value })} />

        <input className="form-control mb-2"
          value={form.image}
          onChange={(e) => setForm({ ...form, image: e.target.value })} />

        <textarea className="form-control mb-2"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}></textarea>

        <button className="btn btn-primary">Update</button>
      </form>
    </div>
  );
}