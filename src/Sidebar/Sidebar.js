import React, { useState } from "react";
import './Sidebar.css';
import PopUp from "./PopUp.js";
import Table from "./Table.js";
import logo2 from './pict/3.png'; 
import logo1 from './pict/1.jfif'; 
import book from './buttonPict/book.jpg'; 
import handshake from './buttonPict/handshake.jpg'; 
import strength from './buttonPict/strength.jpg'; 




export default function Sidebar() {
  const [ActiveBestStud, SetActiveBest] = useState(false); 
  const [ActiveTable, SetActiveTable] = useState(false);
  const [ActivePrime, SetActivePrime] = useState(false);
  return (
    <div className="sidebar" >
      
        <p className="welcome">
          Добро пожаловать на сайт, где студенты 36 группы могут отследить успеваемость по дисциплине: "Анализ и проектировани информационных систем"
        </p>
        <div className="allbutton">
          <button  className="button" onClick={() => SetActiveBest(true)}>
           <img src={strength} alt="BestStud"/>
            Лучшие студенты
          </button>
          <PopUp Active={ActiveBestStud} SetActive={SetActiveBest}>
            <img src={logo1} alt="First"></img> 
            <img src={logo2} alt="First"></img> 
          </PopUp>


          <button className="button" onClick={() => SetActiveTable(true)}>
        <img src={book} alt="AllStud"/>
        Список студентов
          </button>
          <PopUp Active={ActiveTable} SetActive={SetActiveTable}>
            <Table>

            </Table>
          </PopUp>


          <button className="button" onClick={() => SetActivePrime(true)}>
            <img src={handshake} alt="AllInfo"/>
          Общая информация
          </button>
          <PopUp Active={ActivePrime} SetActive={SetActivePrime}>
          "Министерство науки и высшего образования". "ФГБОУ ВО Кубанский "
          </PopUp>
        </div>
    </div>
  );
}