import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import HomePage from "./pages/HomePage"
import Container from "./components/Container"
import Row from "./components/Row"
import AxiosCategories from "./pages/axios/AxiosCategories"
import FetchCategories from "./pages/fetch/FetchCategories"
import RtkCategories from "./pages/rtk/RtkCategories"


function App() {
  

  return (
    <>
      <Navbar/>
      <Container className={"mt-5"}>
        <Row>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/fetch-categories" element={<FetchCategories/>} />
          <Route path="/axios-categories" element={<AxiosCategories/>} />
          <Route path="/rtk-categories" element={<RtkCategories/>} />
        </Routes>
        </Row>
      </Container>
     </>
  )
}

export default App
