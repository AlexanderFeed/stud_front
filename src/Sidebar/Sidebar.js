import React, { useState } from "react";
import './Sidebar.css';
import PopUp from "./PopUp.js";
import Table from "./Table.js";
import logo2 from './pict/3.png'; 
import logo1 from './pict/1.jfif'; 




export default function Sidebar() {
  const [ActiveBestStud, SetActiveBest] = useState(false); 
  const [ActiveTable, SetActiveTable] = useState(false);
  const [ActivePrime, SetActivePrime] = useState(false);
  return (
    <div class="sidebar" >


      <button onClick={() => SetActiveBest(true)}>Лучшие студенты</button>
      <PopUp Active={ActiveBestStud} SetActive={SetActiveBest}>
        <img src={logo1} alt="First"></img> 
        <img src={logo2} alt="First"></img> 
      </PopUp>


      <button onClick={() => SetActiveTable(true)}>Список студентов</button>
      <PopUp Active={ActiveTable} SetActive={SetActiveTable}>
        <Table>
          
        </Table>
      </PopUp>


      <button onClick={() => SetActivePrime(true)}>Общая информация</button>
      <PopUp Active={ActivePrime} SetActive={SetActivePrime}>
        Text
      </PopUp>
      
    </div>
  );
}