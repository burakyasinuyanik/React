import { useContext, useState } from "react"
import { darkThemeIcon,lightThemeIcon } from "./Icon"
import { ThemeContext } from "../context/ThemeContext"


export default function ThemeIcon(props){
  
  const {themeName,handleTheme}= useContext(ThemeContext)
  
  return(
    <>
      {themeName ==="light" ? <button onClick={handleTheme} className="btn">{lightThemeIcon} light</button>:
        <button onClick={handleTheme} className="btn">{darkThemeIcon} dark</button>
                          }
    </>
  )
}