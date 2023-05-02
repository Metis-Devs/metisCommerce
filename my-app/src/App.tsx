import React from 'react';

import './App.css';
import { NavBar } from './components/NavBar';
import { Product } from './pages/ProductView/Product';
import { Routes,Route } from 'react-router-dom';
import { CarouselComponent } from './components/Carousel';


function App() {
  return (
    <>
    <NavBar></NavBar>
    <CarouselComponent></CarouselComponent>
    
    <Routes>
       <Route  index path='/' element={<Product></Product>}/>
     </Routes></>
  )
}

export default App;
