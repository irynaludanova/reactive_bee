import React, { useContext } from "react"
import { Form } from "react-bootstrap"
import { AuthContext } from "../../context"
import { MyButton } from "../../UI/button/MyButton"
const Login = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext)
  const login = (e) => {
    e.preventDefault()
    setIsAuth(true)
    localStorage.setItem("auth", "true")
  }

  return (
    <div>
      <h1>Login Page</h1>
      <Form onSubmit={login}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <MyButton variant="primary" type="submit">
          Submit
        </MyButton>
      </Form>
    </div>
  )
}

export default Login
