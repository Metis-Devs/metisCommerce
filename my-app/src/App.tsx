import React from 'react';

import './App.css';
import { NavBar } from './components/NavBar';
import { Product } from './pages/ProductView/Product';
import { Routes,Route } from 'react-router-dom';
import { CarouselComponent } from './components/Carousel';
import { Login } from './pages/Login/Login';
import { Register } from './pages/Register/Register';
import { Location } from './pages/Register/Location';
import { ProductDescription } from './pages/ProductDescription/ProductDescription';
import { ProductType } from './pages/ProductTypes/ProductType';
import { Profile } from './pages/Profile/Profile';


function App() {
  return (
    <>
    
    
    
    <Routes>
        <Route path="/login" element={<Login></Login>}/>
        <Route path="/register" element={<Register></Register>}/>
        <Route path="/location" element={<Location></Location>}/>
        <Route  path="/productDescription/:id" element={<><NavBar></NavBar><ProductDescription></ProductDescription></>}/>
        <Route  path="/types/:type" element={<><NavBar></NavBar><ProductType></ProductType></>}/>
        <Route  path="/profile" element={<><NavBar></NavBar><Profile></Profile></>}/>

       <Route  index path='/' element={<><NavBar></NavBar><CarouselComponent></CarouselComponent><Product></Product></>}/>
     </Routes>
     
     </>
  )
}

export default App;
