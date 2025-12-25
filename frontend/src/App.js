import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import AdminDashboard from "./screens/AdminDashboard";
import AdminProducts from "./screens/AdminProducts";
import AdminOrdersScreen from "./screens/AdminOrdersScreen";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/register" element={<RegisterScreen />} />

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/products" element={<AdminProducts />} />
      </Routes>
    </Router>
  );
}
<Route path="/admin/orders" element={<AdminOrdersScreen />} />
export default App;   // 🔥 THIS LINE FIXES YOUR ERROR
