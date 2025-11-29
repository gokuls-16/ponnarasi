import { Link } from "react-router-dom";

export default function AdminDashboard() {
  return (
    <div className="container mt-4">
      <h2>Admin Dashboard</h2>
      <Link className="btn btn-primary mt-3" to="/admin/products">
        Manage Products
      </Link>
    </div>
  );
}