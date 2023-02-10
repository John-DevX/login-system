import { useState } from "react";
import { AuthContext } from "../auth/authContext";
import { User } from "../../types/User";
export const ThemeProvider = ({children} : {children: React.ReactNode}) => {
    
    
    return(
        <AuthContext.Provider value={{user, signin, signout}}>
            {children}
        </AuthContext.Provider>
    )
}
