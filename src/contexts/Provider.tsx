import { useState } from "react";
import { AuthContext } from "./authContext";

export const Provider = ({children} : {children: React.ReactNode}) => {
    
    const [theme, setTheme] = useState<boolean>(false);
    
    return(
        <AuthContext.Provider value={{theme, setTheme}}>
            {children}
        </AuthContext.Provider>
    )
}