import logo from './logo.svg';
import './App.css';
import {useState } from 'react';
import Navbar from './layout/Navbar'
import React from 'react';

function App() {
  const [name,setName] = useState('')
  return (
    <div className="App">
      <Navbar/>
      <div className='base'>
        <input type='text' className='searchInput'></input>

        </div>
    </div>
  );
}

export default App;
