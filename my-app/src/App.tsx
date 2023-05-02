import React from 'react';

import './App.css';
import { NavBar } from './components/NavBar';
import { Product } from './pages/ProductView/Product';


function App() {
  return (
   <>
   <NavBar></NavBar>

  <Product></Product>
  </>
  )
}

export default App;
