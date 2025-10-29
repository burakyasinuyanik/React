import { Routes,Route } from 'react-router-dom'
import Home from "./pages/Home.jsx"
import Contact from "./pages/Contact.jsx"
import About from "./pages/About.jsx"
import PageNotFound from './pages/PageNotFound.jsx'
import {Category, Product, ProductLayout, Products} from './products'
import Login from './pages/Login.jsx'
import PrivateRoute from './PrivateRoute.jsx'
import Fav from './pages/fav.jsx'


export default function SiteRouters({handleLogin,user}){

  return(
    
      <Routes>
              <Route path="/" element={<Home user={user}/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/contact" element={<Contact/>}/>
              <Route path='/products' element={<ProductLayout user={user}/>}>
                <Route index={true} element={<Products user={user}/>}/>
                <Route path="category/:categoryName" element={<Category user={user}/>}/>
                <Route path='product/:productId' element={<Product user={user}/>}/>
              </Route>
              <Route path='/login' element={<Login handleLogin={handleLogin} />}/>
              <Route path='/fav' element={<PrivateRoute user={user}><Fav/></PrivateRoute>}/>
              <Route path="*" element={<PageNotFound/>}/>

      </Routes>
    
  )
}