import { createContext, useContext, useState } from "react";

const userContext = createContext();

export const useUser = () => {
  return useContext(userContext);
};

export default function UserProvider({ children }) {
  const [userName, setUserName] = useState(
    localStorage.getItem("user") || null
  );

  const login = (username) => {
    localStorage.setItem("user", username);
    setUserName(username);
  };

  const logout = () => {
    localStorage.clear();
    window.location.reload();
    setUserName(null);
  };

  return (
    <userContext.Provider value={{ userName, login, logout }}>
      {children}
    </userContext.Provider>
  );
}
