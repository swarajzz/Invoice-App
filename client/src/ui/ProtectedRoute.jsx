import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getCurrentToken } from "../features/auth/authSlice";

function ProtectedRoute({ children }) {
  const isAuthenticated = useSelector(getCurrentToken);

  const navigate = useNavigate();
  useEffect(
    function () {
      if (!isAuthenticated) {
        navigate("/auth/login");
      }
    },
    [isAuthenticated, navigate]
  );

  return isAuthenticated ? children : null;
}

export default ProtectedRoute;
