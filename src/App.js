import React from 'react';
import {BrowserRouter , Route , Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';
import Home from './pages/Home';
import Products from './pages/Product';
import Reports from './pages/Reports';


function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
    <Route exact path='/' element={<Home />} />
    <Route exact path='/reports' element={<Reports />} />
    <Route exact path='/products' element={<Products />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;