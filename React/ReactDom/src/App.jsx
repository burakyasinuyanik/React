import { useState } from 'react'
import NavBar from './components/Navbar'
import SiteRouters from './SiteRouters'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar/>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <SiteRouters/>
              
          </div>
        </div>
      </div>
    </>
  )
}

export default App
