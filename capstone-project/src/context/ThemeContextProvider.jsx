import { createContext,useState } from "react";

export const ThemeContext=createContext()

const ThemeContextProvider=({children})=>{
    const [theme,setTheme]= useState('light')

const toggleTheme =()=>{
  setTheme( theme=== 'light'? 'dark':'light');
} 
   
   
    const objectsPassed ={
theme,setTheme,toggleTheme
    }
    
    
    
    
    return(
        <ThemeContext.Provider value={objectsPassed}>
            {children}
        </ThemeContext.Provider>
    )
}



export default ThemeContextProvider;