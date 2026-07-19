import { useEffect, useState, useCallback, useRef } from "react";
import api from "@/api/api";
import { toast } from "sonner";
import { AuthContext } from "@/context/AuthContext";

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null); 
  // 🌟 A firewall flag to block late profile checks during the logout transition phase
  const isLoggingOutRef = useRef(false);
  const loadProfile = useCallback(async () => {
  console.log("loadProfile called");

  const token = localStorage.getItem("token");
  console.log("Token:", token);

  if (!token) {
    console.log("No token");
    setUser(null);
    return;
  }

  try {
    const res = await api.get("/profile");

    console.log("Profile response:", res.data);

    setUser(res.data);

    console.log("User updated");
  } catch (err) {
    console.log(err.response);
    console.log("Profile failed");
    setUser(null);
  }
}, []);
  useEffect(() => {
    isLoggingOutRef.current = false; // Reset the flag on initial application mount
    const token = localStorage.getItem("token");
    if (token && token !== "undefined" && token !== "null") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      loadProfile();
    }
  }, [loadProfile]);

  const logout = () => {
    // 3. SET THE FIREWALL: Block any incoming profile calls instantly
    isLoggingOutRef.current = true;
    localStorage.removeItem("token");
    setUser(null);
    toast.success("Logged out!");
  };
  const isAuthenticated = !!user;
  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        loadProfile,
        logout,
        isAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}