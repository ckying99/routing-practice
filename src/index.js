import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
import Navbar from './layout/Navbar';
import Home from './layout/Home';
import About from './layout/About';
import Contact from './layout/Contact';
import Products from './layout/Products';
import Product from './layout/Product';

import NoPage from "./layout/NoPage";
//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";     
    
//core
import "primereact/resources/primereact.min.css";

//icons
import "primeicons/primeicons.css";     
//prime flex
import "/node_modules/primeflex/primeflex.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <div className="page-body">
    <BrowserRouter>
<Navbar/>
<div style={{ 
          display:'flex',
          justifyContent:'center',
          width: '100%,'}}>
      <Routes>
        <Route path='/' element={<Home />}/>
          <Route path='/About' element={<About />}/>
          <Route path='/Products' element={<Products />}/>
          <Route path='/Products/:id' element={<Product />}/>
          <Route path='/Contact' element={<Contact/>}/>
          <Route path='*' element={<NoPage/>}/>
      </Routes>
</div>
    </BrowserRouter>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
