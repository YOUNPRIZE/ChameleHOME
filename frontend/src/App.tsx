import {BrowserRouter, Route, Routes} from "react-router-dom"
import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from "./pages/Main";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";


function App():JSX.Element {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/SignUp" element={<SignUp/>}/>
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
