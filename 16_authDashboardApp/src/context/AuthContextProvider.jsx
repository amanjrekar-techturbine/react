
import AuthContext from "./AuthContext"
import React, { useContext, useState } from "react";

function AuthContextProvider({ children }) {

  

  const [user, setUser] = useState(null);
  const login = (username) => setUser({ username });
  const logout = () => {setUser(null); };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;

export function useAuth() {
  return useContext(AuthContext);
}
