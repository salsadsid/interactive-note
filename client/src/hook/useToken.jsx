import  { useEffect, useState, } from 'react';


const useToken = (token) => {
    const [userInfo,setUserInfo]=useState("")
    useEffect(()=>{
        if(token){
            fetch(`http://localhost:5000/client/auth`,{
                method:"GET",
                headers:{
                  "content-type":"application/json",
                  authorization: `Bearer ${token}`,
                },
            })
    .then(res=>res.json())
    .then(data=>{
      if(data){
     setUserInfo(data.user)
      }

    })
        }
    },[token])
    return [userInfo]
};

export default useToken;