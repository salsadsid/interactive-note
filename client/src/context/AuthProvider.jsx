import React, { createContext, useEffect, useState } from "react";
import useToken from "../hook/useToken";

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
  const [token, setToken] = useState("");
  const [user, setUser] = useState("");
  const [loading,setLoading]= useState(false)
  const [userInfo]= useToken(token)
 useEffect(()=>{
  if(!token){
    const getToken = localStorage.getItem("accessToken");
    setToken(getToken);
  }
  if(userInfo){
    setUser(userInfo)
   }
 },[setToken,token,userInfo,setUser])
 
  const createUser = async (userData) => {
    console.log(userData);
    const res = await fetch("http://localhost:5000/client/sign", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    const data = await res.json();
    console.log(data);
    return data;
  };
  const loginUser = async (userData) => {
    // console.log(userData);
    const res = await fetch("http://localhost:5000/client/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    const data = await res.json();
    console.log(data);
    return data;
}
  const authInfo={
    loading,
    setLoading,
    createUser,
    loginUser,
    user,
    setUser,
    token,
    setToken,
  }
  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
