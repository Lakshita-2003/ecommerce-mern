import { Link } from "react-router-dom";

const Product = ({ product }) => {
  return (
    <div style={{ border: "1px solid #ccc", padding: 10, margin: 10 }}>
      <h3>{product.name}</h3>
      <p>₹{product.price}</p>
      <p>{product.category}</p>
      <Link to={`/cart?productId=${product._id}`}>Add to Cart</Link>
    </div>
  );
};

export default Product;
