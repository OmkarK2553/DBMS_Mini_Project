import './App.css';
import { Route, Routes, BrowserRouter as Router } from "react-router-dom"
import Login from "./components/Login"
import Navbar from "./components/Navbar"
import Home from './components/Home';
import Plans from './components/Plans'
import Signup from './components/Signup'
import Contact from './components/Contact'
import Dashboard from './components/Dashboard';
import InsuranceForm from './components/InsuranceForm';
import { useEffect } from 'react';
import AdminLogin from './components/AdminLogin';
import AdminPage from './components/AdminPage';

function App() {
  useEffect(() => {
    document.title = "Insurance Management"
  })
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/register" element={<Signup />}></Route>
        <Route exact path="/plans" element={<Plans />}></Route>
        <Route exact path="/contact" element={<Contact />}></Route>
        <Route exact path="/dashboard" element={<Dashboard />}></Route>
        <Route exact path="/buy" element={<InsuranceForm />}></Route>
        <Route exact path="/adminlogin" element={<AdminLogin />}></Route>
        <Route exact path="/adminpage" element={<AdminPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
