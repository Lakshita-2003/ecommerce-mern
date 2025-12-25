import { useState } from "react";
import API from "../services/api";

function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const { data } = await API.post("/users/login", {
        email,
        password,
      });

      localStorage.setItem("userInfo", JSON.stringify(data));
      setMessage("Login successful ✅");
      console.log(data);
    } catch (error) {
      setMessage(error.response?.data?.message || "Error");
    }
  };

  return (
    <div style={{ padding: "40px" }}>
      <h2>Login</h2>

      <form onSubmit={submitHandler}>
        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /><br /><br />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /><br /><br />

        <button type="submit">Login</button>
      </form>

      <p>{message}</p>
    </div>
  );
}

export default LoginScreen;
