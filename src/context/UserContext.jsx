import { useContext } from "react";
import { createContext, useState } from "react";

const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [userUUID, setUserUUID] = useState('');
  const [token, setToken] = useState('');
  const [role, setRole] = useState('');

  return (
    <UserContext.Provider value={{ userUUID, token, role, setUserUUID, setToken, setRole }}>
      {children}
    </UserContext.Provider>
  );
};

const useUserContext = () => {
  return (
    useContext(UserContext)
  )
};

export { UserContext, UserContextProvider, useUserContext };