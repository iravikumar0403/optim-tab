import { useState, useEffect, useContext, createContext } from "react";

const UserContext = createContext();
const useUser = () => useContext(UserContext);

const UserProvider = ({ children }) => {
  const [user, setUser] = useState("");

  useEffect(() => {
    const username = localStorage.getItem("optim-user");
    if (username) {
      setUser(username);
    }
  }, [setUser]);

  const setOptimUser = (username) => {
    setUser(username);
    localStorage.setItem("optim-user", username);
  };

  return (
    <UserContext.Provider value={{ user, setOptimUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { useUser, UserProvider };
