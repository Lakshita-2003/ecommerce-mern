import { Link } from "react-router-dom";

const Header = () => {
  const userInfo = localStorage.getItem("userInfo");

  return (
    <nav style={{ padding: "10px", background: "#222", color: "#fff" }}>
      <Link to="/" style={{ marginRight: 10, color: "#fff" }}>Home</Link>
      <Link to="/cart" style={{ marginRight: 10, color: "#fff" }}>Cart</Link>

      {userInfo ? (
        <span>Welcome</span>
      ) : (
        <>
          <Link to="/login" style={{ marginRight: 10, color: "#fff" }}>Login</Link>
          <Link to="/register" style={{ color: "#fff" }}>Register</Link>
        </>
      )}
    </nav>
  );
};

export default Header;
