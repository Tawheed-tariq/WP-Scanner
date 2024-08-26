import Home from './pages/Home/Home'
import './App.css'
// import SignUp from './pages/signup/SignUp'
// import Login from './pages/login/Login'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Dashboard from './pages/Dashboard/Dashboard';
import Report from './pages/report/Report'
import Scans from './pages/scans/Scans'
import Notfound from './components/Notfound';
import DashboardNew from 'pages/NewDashboard/Dashboard';
import ScanTemplates from 'pages/scan templates/ScanTemplates';
import Profile from 'pages/profile/Profile';
import Setting from 'pages/setting/Setting';
function App() {
  
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/signup' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/dashboard' element={<Dashboard  />}/>
          <Route path='/scans/*' element={<Scans />}/>
          <Route path='/report' element={<Report/>}/>
          <Route path="/scan-templates" element={<ScanTemplates/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/setting" element={<Setting/>} />
          <Route path='*' element={<Notfound/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
