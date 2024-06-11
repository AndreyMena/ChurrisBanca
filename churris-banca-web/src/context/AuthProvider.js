import { createContext, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
  const [activePage, setActivePage] = useState("social");

  return (
    <AuthContext.Provider value={{ auth, setAuth, activePage, setActivePage }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
