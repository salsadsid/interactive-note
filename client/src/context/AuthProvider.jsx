import React, { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
  const [user, setUser] = useState("");

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
  const authInfo={
    user,
    createUser
  }
  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
