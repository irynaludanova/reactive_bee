import Home from "./../pages/Home/Home"
import Login from "./../pages/Login/Login"
import Posts from "./../pages/Posts/Posts"
import Error from "./../pages/Error/Error"
import PostIdPage from "./../pages/PostIdPage/PostIdPage"
export const privateRoutes = [
  { path: "/home", component: Home, exact: true },
  { path: "/posts", component: Posts, exact: true },
  { path: "/posts/:id", component: PostIdPage, exact: true },
  { path: "/error", component: Error, exact: true },
]
export const publicRoutes = [{ path: "/login", component: Login, exact: true }]
