import { createContext, useEffect, useState } from "react";

const ThemeContext=createContext()
function ThemeContextProvider({children}){
  const[themeName,setThemeName]=useState("light")
  // const themeValue={
  //   themeName
  // }
  
  function handleTheme() {
    // if(theme==="light"){
    //   document.documentElement.setAttribute("data-bs-theme","dark")
    //   setTheme("dark")
    // }else{
    //   document.documentElement.setAttribute("data-bs-theme", "light")
    //   setTheme("light")
    // }
    setThemeName(prev => {
      const themeInfo = prev === "light" ? "dark" : "light"
      changeTheme(themeInfo)
      localStorage.setItem("theme",themeInfo)
      return themeInfo
    })
  }

    useEffect(() => {

      changeTheme(getPreferredTheme())
      setThemeName(getPreferredTheme())
    }, [])

    function changeTheme(themeName){
      document.documentElement.setAttribute('data-bs-theme', themeName)
    }
    function getPreferredTheme(){
      const storedTheme=localStorage.getItem("theme")
      if(storedTheme){
        return storedTheme
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light"
    }

  
  return <ThemeContext.Provider value={{themeName,handleTheme}}>
        {children}
  </ThemeContext.Provider>
}
export{ThemeContextProvider,ThemeContext}