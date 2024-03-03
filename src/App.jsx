import Home from './pages/Home/Home'
import './App.css'
import SignUp from './pages/signup/SignUp'
import Login from './pages/login/Login'
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Dashboard from './pages/Dashboard/Dashboard';

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
    {
      path: "/dashboard",
      element: <Dashboard/>,
    },
    {
      path: "/scans",
      element: <Dashboard/>,
    },
    {
      path: "/findings",
      element: <Dashboard/>,
    },
    {
      path: "/report",
      element: <Dashboard/>,
    }
  ]);

  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
