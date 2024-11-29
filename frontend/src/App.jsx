import { StrictMode } from "react"
import Navbar from "./components/Navbar"
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import {Routes, Route, BrowserRouter} from "react-router-dom"
import AddVehicle from "./pages/AddVehicle"


function App() {
  return (
    <StrictMode>
      <BrowserRouter>
    <Navbar></Navbar>
    <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/add_vehicle" element={<AddVehicle/>} />
        </Routes>
        </BrowserRouter>
    </StrictMode>
  )
}

export default App
