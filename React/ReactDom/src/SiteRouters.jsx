import { Routes,Route } from 'react-router-dom'
import Home from "./pages/Home.jsx"
import Contact from "./pages/Contact.jsx"
import About from "./pages/About.jsx"

export default function SiteRouters(){

  return(
    
      <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/contact" element={<Contact/>}/>
      </Routes>
    
  )
}