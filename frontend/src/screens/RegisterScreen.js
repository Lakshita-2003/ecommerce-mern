import { useState } from "react";
import API from "../services/api";

function RegisterScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const { data } = await API.post("/users/register", {
        name,
        email,
        password,
      });

      setMessage("Registration successful ✅");
      console.log(data);
    } catch (error) {
      setMessage(error.response?.data?.message || "Error");
    }
  };

  return (
    <div style={{ padding: "40px" }}>
      <h2>Register</h2>

      <form onSubmit={submitHandler}>
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        /><br /><br />

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

        <button type="submit">Register</button>
      </form>

      <p>{message}</p>
    </div>
  );
}

export default RegisterScreen;
