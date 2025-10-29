import { Routes,Route } from 'react-router-dom'
import Home from "./pages/Home.jsx"
import Contact from "./pages/Contact.jsx"
import About from "./pages/About.jsx"
import PageNotFound from './pages/PageNotFound.jsx'
import {Category, Product, ProductLayout, Products} from './products'


export default function SiteRouters(){

  return(
    
      <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/contact" element={<Contact/>}/>
              <Route path='/products' element={<ProductLayout/>}>
                <Route index={true} element={<Products/>}/>
                <Route path="category/:categoryName" element={<Category/>}/>
                <Route path='product/:productId' element={<Product/>}/>
              </Route>
              <Route path="*" element={<PageNotFound/>}/>
      </Routes>
    
  )
}