import { useEffect } from "react";
import { createContext, useContext, useState } from "react";
import refreshApi from "../../shared/refreshApi";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [accessToken, setAccessToken] = useState(null);
  

  console.log("this is accwss tokennnnnn", accessToken)
  console.log("this is user ", user)

  useEffect(() => {
  const refreshToken = async () => {
    try {
      const response = await refreshApi.post("/refresh");

      console.log("thiis is refresh response ", response)

      setAccessToken(response.data.accessToken);
      setUser(response.data.user);
    } catch (error) {
      setAccessToken(null);
      setUser(null);
    } finally {
      // setLoading(false);
    }
  };

  refreshToken();
}, []);




  const value = {
    user,
    setUser,
    accessToken,
    setAccessToken,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
};

export default AuthProvider


export function useAuthContext (){
    const context = useContext(AuthContext)

    if(!context){
        throw new Error("useAuthContext must be used within an AuthProvider")
    }

    return context
}