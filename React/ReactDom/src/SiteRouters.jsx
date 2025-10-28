import { Routes,Route } from 'react-router-dom'
import Home from "./pages/Home.jsx"
import Contact from "./pages/Contact.jsx"
import About from "./pages/About.jsx"
import PageNotFound from './pages/PageNotFound.jsx'
import ProductCardLayout from './products/ProductLayout.jsx'
import Products from './products/Products.jsx'

export default function SiteRouters(){

  return(
    
      <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/contact" element={<Contact/>}/>
              <Route path='/products' element={<ProductCardLayout/>}>
                <Route index={true} element={<Products/>}/>
              </Route>
              <Route path="*" element={<PageNotFound/>}/>
      </Routes>
    
  )
}