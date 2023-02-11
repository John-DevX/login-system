import { useState } from "react";
import { AuthContext } from "../auth/authContext";
export const AuthProvider = ({children} : {children: React.ReactNode}) => {
    const [user, setUser] = useState<boolean>(false);
    
    return(
        <AuthContext.Provider value={{user, setUser}}>
            {children}
        </AuthContext.Provider>
    )
}
