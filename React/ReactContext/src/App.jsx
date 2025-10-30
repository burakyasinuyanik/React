import { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import { Home, About, Contact } from './pages'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
     <div className="container">
      <div className="row">
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/hakkimizda' element={<About/>}/>
          <Route path='/iletisim' element={<Contact/>}/>
        </Routes>
      </div>
     </div>
     <Footer/>
     </>
  )
}

export default App
