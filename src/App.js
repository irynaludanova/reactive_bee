import { React, useEffect, useState } from "react"
import { BrowserRouter } from "react-router-dom"
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import MyNavbar from "./UI/navbar/MyNavbar"
import AppRouter from "./components/AppRouter/AppRouter"
import { AuthContext } from "./context"
function App() {
  const [isAuth, setIsAuth] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    if (localStorage.getItem("auth")) {
      setIsAuth(true)
    }
    setIsLoading(false)
  }, [])
  return (
    <AuthContext.Provider
      value={{
        isAuth,
        setIsAuth,
        isLoading,
      }}
    >
      <BrowserRouter>
        <MyNavbar />
        <AppRouter />
      </BrowserRouter>
    </AuthContext.Provider>
  )
}

export default App
