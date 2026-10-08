import{Routes,Route} from "react-router-dom"
import Register from "./pages/Register"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import View from "./pages/View"
import Pnf from "./pages/Pnf"
import MainSearch from "./searchcomponents/MainSearch"

function App() {

  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Register/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/dashboard" element={<Dashboard/>}></Route>
      <Route path="/view/:id" element={<View/>}></Route>
      <Route path="/search" element={<MainSearch/>}></Route>

      <Route path="*" element={<Pnf/>}></Route>


    
    </Routes>
      <Footer/>
    </>
  )
}

export default App
