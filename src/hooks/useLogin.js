import { useState, useEffect } from "react";

const useLogin = (token) => {
   debugger;

    const [ isLoggedIn, setIsLoggedIn ] = useState(null);
    
    useEffect(()=>{
        const loggedInCheck = token ? true : false ;
        setIsLoggedIn(loggedInCheck);
    },[token]);

    return isLoggedIn;
};

export default useLogin;