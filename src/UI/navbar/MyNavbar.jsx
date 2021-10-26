import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { Nav, NavDropdown, Navbar, Container } from "react-bootstrap"
import { MyButton } from "../button/MyButton"
import { AuthContext } from "../../context"
import classes from "./MyNavbar.module.css"
const MyNavbar = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext)
  const logout = () => {
    setIsAuth(false)
    localStorage.removeItem("auth")
  }
  return (
    <Navbar bg="dark" expand="lg">
      <Container>
        <Navbar.Brand href="home">Reactive Bee</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/home" className={classes.link}>
              Home
            </Link>
            <Link to="/posts">Posts</Link>
            <Link to="/quizpage">Quiz</Link>

            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <MyButton onClick={logout}>LogOut</MyButton>
    </Navbar>
  )
}

export default MyNavbar
