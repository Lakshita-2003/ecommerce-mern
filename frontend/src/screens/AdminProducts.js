import axios from "axios";
import { useEffect, useState } from "react";

function AdminProducts() {
  const [products, setProducts] = useState([]);

  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("http://localhost:5000/api/products");
      setProducts(data);
    };
    fetchProducts();
  }, []);

  const createProduct = async () => {
    await axios.post(
      "http://localhost:5000/api/products",
      { name: "New Product", price: 1000 },
      {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      }
    );
    window.location.reload();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Products</h2>
      <button onClick={createProduct}>Add Product</button>
      <ul>
        {products.map((p) => (
          <li key={p._id}>{p.name} - ₹{p.price}</li>
        ))}
      </ul>
    </div>
  );
}

export default AdminProducts;
