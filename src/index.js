import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Dodaj from './routes/Dodaj';
import * as ReactDOMClient from 'react-dom/client';
import AzurirajId from './routes/AzurirajId';
import 'jquery';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
  <Routes>
    <Route path="/" element={<App />}>
    <Route path=":artId" element={<AzurirajId />} />
    </Route>
    <Route path="dodaj" element={<Dodaj />} />
  </Routes>
</BrowserRouter>);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
