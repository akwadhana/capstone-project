import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContextProvider";
import { BsFillHouseFill } from "react-icons/bs";

const Theme = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div className="flex items-center">
      {/* <h1 className="text-white"> The theme is {theme}</h1> */}
      <button
        className="bg-black text-white rounded-md p-1"
        onClick={toggleTheme}
      >
        <BsFillHouseFill className="text-white w-8 h-8" />
      </button>
    </div>
  );
};

export default Theme;
