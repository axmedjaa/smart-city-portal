import { Navigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";

export default function PublicOnlyRoute({ children }) {
  const {user, isAuthenticated } = useAuth();
  if (isAuthenticated) {
    if (user?.role === "ADMIN") {
      return <Navigate to="/admin" replace />;
    }

    if (user?.role === "OFFICER") {
      return <Navigate to="/officer" replace />;
    }

    if (user?.role === "CITIZEN") {
      return <Navigate to="/citizen" replace />;
    }

    return <Navigate to="/" replace />;
  }

  return children;
}