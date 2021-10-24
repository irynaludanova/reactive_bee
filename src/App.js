import React from "react"
import { BrowserRouter } from "react-router-dom"
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import MyNavbar from "./UI/navbar/MyNavbar"
import AppRouter from "./components/AppRouter/AppRouter"
function App() {
  return (
    <BrowserRouter>
      <MyNavbar />
      <AppRouter />
    </BrowserRouter>
  )
}

export default App
