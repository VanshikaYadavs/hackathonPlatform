import { createContext, useState } from "react";

export const StoreContext = createContext(null);

export const StoreProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token") || "");

  return (
    <StoreContext.Provider value={{ token, setToken }}>
      {children}
    </StoreContext.Provider>
  );
};
