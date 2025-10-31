import { useEffect, useState,useContext } from 'react'
import NavBar from './components/Navbar'
import SiteRouters from './SiteRouters'
import { useNavigate } from 'react-router-dom'
import { SiteContext } from './context/SiteContext'

function App() {
  
  
  return (
    <>
      <NavBar />
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <SiteRouters />
              
          </div>
        </div>
      </div>
    </>
  )
}

export default App
