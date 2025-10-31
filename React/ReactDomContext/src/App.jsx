import { useEffect, useState } from 'react'
import NavBar from './components/Navbar'
import SiteRouters from './SiteRouters'
import { useNavigate } from 'react-router-dom'

function App() {
  const [user,setUser]=useState(null)
  const navigate=useNavigate()
  const handleLogin=()=>{
    const user={id:1,name:"burak"}
    setUser(user)
    localStorage.setItem("user",JSON.stringify(user))
    navigate("/")
  }
  const handleLogOut=()=>{
    localStorage.removeItem("user")
    setUser(null)
    navigate("/")

  }
   useEffect(()=>{
    setUser(JSON.parse(localStorage.getItem("user")??null))
   },[])

  return (
    <>
      <NavBar user={user} handleLogout={handleLogOut}/>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <SiteRouters handleLogin={handleLogin} user={user} />
              
          </div>
        </div>
      </div>
    </>
  )
}

export default App
