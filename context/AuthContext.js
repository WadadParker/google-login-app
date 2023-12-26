import React, {useState,useContext,createContext} from "react";

export const AuthContext = createContext();

export const AuthProvider=({children})=>
{
    const [userInfo, setUserInfo] = useState(null);

    return (
        <AuthContext.Provider value={{userInfo,setUserInfo}}>
            {children}
        </AuthContext.Provider>
    )
}