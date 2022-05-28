import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import Ucitaj from './Ucitaj';
import { Outlet, Link } from "react-router-dom";


function App() {
  return (
  <>
    
    <h1 className='App'>PC shop</h1>
    <nav className='navigacija'>
    <Link className='button' to="/"><button type='button' className='btn'>Pocetna</button></Link>
    <Link className='button' to="/dodaj"><button type='button' className='btn'>Dodaj</button></Link>
    </nav>
    <Outlet />

    <Ucitaj/>
  </>
  );
  }
  export default App;
  
