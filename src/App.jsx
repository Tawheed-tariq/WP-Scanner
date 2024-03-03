import Home from './pages/Home/Home'
import './App.css'
import SignUp from './pages/signup/SignUp'
import Login from './pages/login/Login'
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Dashboard from './pages/Dashboard/Dashboard';
import Report from './pages/report/Report'
import Findings from './pages/findings/Findings';
import Scans from './pages/scans/Scans'
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
      element: <Scans/>,
    },
    {
      path: "/findings",
      element: <Findings/>,
    },
    {
      path: "/report",
      element: <Report/>,
    }
  ]);

  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
