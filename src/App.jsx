
import Home from './pages/Home/Home'
import './App.css'
import SignUp from './pages/signup/SignUp'
import Login from './pages/login/Login'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/signup",
      element: <SignUp/>,
    },
    {
      path: "/login",
      element: <Login/>,
    },
  ]);

  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
