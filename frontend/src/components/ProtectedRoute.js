import { Navigate } from "react-router-dom";
import { getUserInfo } from "../utils/auth";

const ProtectedRoute = ({ children }) => {
  const user = getUserInfo();

  return user ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
