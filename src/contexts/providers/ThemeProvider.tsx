import { useState } from "react";
import { ThemeContext } from "../themeContext";

export const ThemeProvider = ({children} : {children: React.ReactNode}) => {
    const [theme, setTheme] = useState<boolean>(false);
    
    return(
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}
