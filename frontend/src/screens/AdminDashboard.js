import { Link } from "react-router-dom";

function AdminDashboard() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Admin Dashboard</h2>
      <Link to="/admin/products">
        <button>Manage Products</button>
      </Link>
    </div>
  );
}

export default AdminDashboard;
