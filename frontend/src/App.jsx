import { StrictMode } from "react"
import Navbar from "./components/Navbar"
import Vehicles from "./pages/Vehicles"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import HomePage from './pages/HomePage'
import {Routes, Route, BrowserRouter} from "react-router-dom"
import AddVehicle from "./pages/AddVehicle"
import { AuthProvider } from "./context/AuthContext"

function App() {
  return (
    <StrictMode>
      <AuthProvider>
        <BrowserRouter>
          <Navbar></Navbar>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/vehicles" element={<Vehicles />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/add-vehicle" element={<AddVehicle/>} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </StrictMode>
  )
}

export default App
