
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Inicio from './Components/Inicio';
import Proyectos from './Components/Proyectos';
import Sobre from './Components/Sobre';
import Blog from './Components/Blog';
//nuevo

import React from 'react';

import Contactame from './Components/Contactame';
import BlogDetail from './leer/BlogDetail';



const App = () => {

  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>

          <Route exact path="/" element={<Inicio />} />
          <Route exact path="/Sobre" element={<Sobre />} />
          <Route exact path="/Proyectos" element={<Proyectos />} />
          <Route exact path="/Blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetail/>} />  
          <Route exact path="/Contactame" element={<Contactame />} />
          
        </Routes>
      </BrowserRouter>

      <Footer />
    
    </>
  );
}

export default App;
