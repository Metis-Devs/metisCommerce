import React from 'react';

import './App.css';
import { NavBar } from './components/NavBar';
import { Product } from './pages/ProductView/Product';
import { Routes,Route } from 'react-router-dom';
import { CarouselComponent } from './components/Carousel';
import { Login } from './pages/Login/Login';
import { Register } from './pages/Register/Register';


function App() {
  return (
    <>
    
    
    
    <Routes>
        <Route path="/login" element={<Login></Login>}/>
        <Route path="/register" element={<Register></Register>}/>
       <Route  index path='/' element={<><NavBar></NavBar><CarouselComponent></CarouselComponent><Product></Product></>}/>
     </Routes>
     
     </>
  )
}

export default App;
