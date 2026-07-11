import { createContext, useState } from "react";

export const MyContext = createContext();

export const ContextProvider = ({ children }) => {
  const [toggle, setToggle] = useState(false);
  const [carts, setCarts] = useState([]);

  return <MyContext.Provider value={{toggle,setToggle,carts,setCarts}}>{children}</MyContext.Provider>;
};
