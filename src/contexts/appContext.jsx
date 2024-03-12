import { createContext, useContext, useState } from "react";

const appContext = createContext();

export const useApp = () => {
  return useContext(appContext);
};

export default function AppContextProvider({ children }) {
  const [showCreate, setShowCreate] = useState(false);
  return (
    <appContext.Provider value={{ showCreate, setShowCreate }}>
      {children}
    </appContext.Provider>
  );
}
