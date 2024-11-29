import { StrictMode } from "react"
import Navbar from "./components/Navbar"
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import {Routes, Route, BrowserRouter} from "react-router-dom"


function App() {
  return (
    <StrictMode>
      <BrowserRouter>
    <Navbar></Navbar>
    <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
        </BrowserRouter>
    </StrictMode>
  )
}

export default App
