import Home from './pages/Home/Home'
import './App.css'
import SignUp from './pages/signup/SignUp'
import Login from './pages/login/Login'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Dashboard from './pages/Dashboard/Dashboard';
import Report from './pages/report/Report'
import Findings from './pages/findings/Findings';
import Scans from './pages/scans/Scans'
import Error404 from './pages/Error404';
function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/signup' Component={SignUp}/>
        <Route path='/login' Component={Login}/>
        <Route path='/dashboard' Component={Dashboard}/>
        <Route path='/scans/*' Component={Scans}/>
        <Route path='/scan-results/*' Component={Findings}/>
        <Route path='/report' Component={Report}/>
        <Route path='/*' Component={Error404}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
