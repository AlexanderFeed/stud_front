import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';
import Header from './Header/Header.js';
import Sidebar from './Sidebar/Sidebar.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <Header/>
    <Sidebar/>
  </React.StrictMode>
);
