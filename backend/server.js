const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const orderRoutes = require("./routes/orderRoutes");
const productRoutes = require("./routes/productRoutes");
import adminOrderRoutes from "./routes/adminOrderRoutes.js";
dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use("/api/products", productRoutes);
app.use("/api/orders", require("./routes/orderRoutes"));
app.use("/api/orders", orderRoutes);
app.use("/api/admin", adminOrderRoutes);
app.get("/", (req, res) => {
  res.send("API running");
});

app.listen(5000, () => console.log("Server running on port 5000"));
