import React from "react"
import { Route, Switch, Redirect } from "react-router-dom"
import Home from "../../pages/Home/Home"
import Posts from "../../pages/Posts/Posts"
import Error from "../../pages/Error/Error"
const AppRouter = () => {
  return (
    <Switch>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/posts">
        <Posts />
      </Route>
      <Route path="/error">
        <Error />
      </Route>
      <Redirect to="/home" />
    </Switch>
  )
}

export default AppRouter
