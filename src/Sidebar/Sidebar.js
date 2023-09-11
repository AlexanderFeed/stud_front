import React, { useState } from "react";
import './Sidebar.css';
import PopUp from "./PopUp.js";
import logo2 from './pict/3.png'; 
import logo1 from './pict/1.jfif'; 



export default function Sidebar() {
  const [ActiveBestStud, SetActiveBest] = useState(false); 
  return (
    <div class="sidebar" >
      <button onClick={() => SetActiveBest(true)}>Лучшие студенты</button>
      <button>Список студентов</button>
      <button>Общая информация</button>
      <PopUp Active={ActiveBestStud} SetActive={SetActiveBest}>
        <img src={logo1} alt="First"></img> 
        <img src={logo2} alt="First"></img> 
      </PopUp>
    </div>
  );
}