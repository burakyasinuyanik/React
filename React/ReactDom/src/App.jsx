import { useState } from 'react'
import NavBar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar/>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <h1>App</h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
