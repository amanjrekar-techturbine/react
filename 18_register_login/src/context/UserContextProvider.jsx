

import React, { useContext, useState } from "react";
import UserContext from "./UserContext.js";

function UserContextProvider({ children }) {

  const [user, setUser] = useState(null);
  const login = (email) => setUser({ email });
  const logout = () => {setUser(null); };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;

export function useAuth() {
  return useContext(UserContext)
}
