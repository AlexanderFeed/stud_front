import React, {useState, useEffect} from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Header from './Header/Header.js'
import Sidebar from './Sidebar/Sidebar.js'
import Table from './Sidebar/Table.js'
import Body from './Body/Body.js'
import logo2 from './Sidebar/pict/3.png'; 
import logo1 from './Sidebar/pict/1.png';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Header/>
      <Sidebar/>
      <div className='bestStud'>
        <img src={logo1} alt="First"></img> 
        <img id='first' src={logo2} alt="First"></img> 
      </div>
      <Table/>
      
      
      <div id='end' className='end'>
      "Министерство науки и высшего образования". "ФГБОУ ВО Кубанский "
      </div>
  </React.StrictMode>
);
