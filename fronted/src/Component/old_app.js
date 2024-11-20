import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import Footer from './Component/Footer';
import CheckGrammer from './Component/CheckGrammer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './Component/About';
import { useState } from 'react';

function App() {
  const [darkmode, setDarkmode] = useState(false);
  const toggle_darkMode = ()=>{
    setDarkmode(!darkmode)
  }
  return (
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/check" element={<CheckGrammer/>}/>
    <Route path="/about" element={<About/>}/>
  </Routes>
  <Footer/>
  </BrowserRouter>
  );
}

export default App;