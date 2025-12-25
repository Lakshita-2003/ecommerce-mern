import { useEffect, useState } from "react";
import { getCartItems, saveCartItems } from "../utils/cart";

function CartScreen() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    setCartItems(getCartItems());
  }, []);

  const updateQty = (id, qty) => {
    const updated = cartItems.map((item) =>
      item._id === id ? { ...item, qty } : item
    );
    setCartItems(updated);
    saveCartItems(updated);
  };

  const removeItem = (id) => {
    const updated = cartItems.filter((item) => item._id !== id);
    setCartItems(updated);
    saveCartItems(updated);
  };

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  if (cartItems.length === 0) return <h3>Cart is empty 🛒</h3>;

  return (
    <div style={{ padding: "30px" }}>
      <h2>Your Cart</h2>

      {cartItems.map((item) => (
        <div key={item._id} style={{ marginBottom: "15px" }}>
          <strong>{item.name}</strong> — ₹{item.price}
          <br />

          <button onClick={() => updateQty(item._id, item.qty - 1)} disabled={item.qty === 1}>-</button>
          <span style={{ margin: "0 10px" }}>{item.qty}</span>
          <button onClick={() => updateQty(item._id, item.qty + 1)}>+</button>

          <button onClick={() => removeItem(item._id)} style={{ marginLeft: "10px" }}>
            Remove
          </button>
        </div>
      ))}

      <h3>Total: ₹{total}</h3>
    </div>
  );
}

export default CartScreen;
