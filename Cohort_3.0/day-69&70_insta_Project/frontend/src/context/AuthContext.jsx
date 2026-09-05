import { useQuery } from "@tanstack/react-query";
import { createContext, useContext } from "react";
import { getMe } from "../api/AuthApi";

export const MyContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["currentUSer"],
    queryFn: getMe,
    retry: false,
  });

  return (
    <MyContext.Provider
      value={{ currentUser: data ?? null, loading: isLoading , isError}}
    >
      {children}
    </MyContext.Provider>
  );
};



export const useAuth = ()=>{
    return useContext(MyContext)
}