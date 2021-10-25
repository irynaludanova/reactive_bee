import React, { useContext } from "react"
import { Route, Switch, Redirect } from "react-router-dom"
import { AuthContext } from "../../context"

import { privateRoutes, publicRoutes } from "../../router"
import { MyLoader } from "../../UI/loader/MyLoader"
const AppRouter = () => {
  const { isAuth, isLoading } = useContext(AuthContext)
  if (isLoading) {
    return <MyLoader />
  }
  return isAuth ? (
    <Switch>
      {privateRoutes.map((route) => (
        <Route
          key={route.component}
          component={route.component}
          path={route.path}
          exact={route.exact}
        />
      ))}
      <Redirect to="/home" />
    </Switch>
  ) : (
    <Switch>
      {publicRoutes.map((route) => (
        <Route
          key={route.component}
          component={route.component}
          path={route.path}
          exact={route.exact}
        />
      ))}
      <Redirect to="/login" />
    </Switch>
  )
}

export default AppRouter
