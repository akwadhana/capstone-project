import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContextProvider";
import { FaBeer } from 'react-icons/fa';




 const Theme= () => {
const {theme, toggleTheme}= useContext
(ThemeContext);
  return (

    <div className="test-end">
        <h1 className="text-white"> The theme is {theme}</h1>
        <button className="bg-black text-white rounded-md p-1" onClick={toggleTheme}>switch team</button>
    </div>
  )
}

export default Theme;