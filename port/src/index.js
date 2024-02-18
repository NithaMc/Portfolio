import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import Skills from './Skills';
import Contact from './Contact';
import Navbars from './Navbars';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    
    <BrowserRouter>
    <Routes>
      <Route index element={<Navbars/>}/>
      <Route path="/" element={<App/>}>
      <Route path="Contact" element={<Contact/>}/>
      <Route path="Skills" element={<Skills/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();