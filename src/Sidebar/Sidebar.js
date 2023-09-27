import React, { Component, useRef, useEffect } from "react";
import './Sidebar.css';
import book from './buttonPict/book.jpg'; 
import handshake from './buttonPict/handshake.jpg'; 
import strength from './buttonPict/strength.jpg'; 




export default function Sidebar() {

  const handleClickScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="sidebar" >
      
        <p className="welcome">
          Добро пожаловать на сайт, где студенты 46 группы могут отследить успеваемость по дисциплине: "Анализ и проектировани информационных систем"
        </p>
        <div className="allbutton">
          <button  className="button" onClick={() => handleClickScroll("first")}>
           <img src={strength} alt="BestStud"/>
            Лучшие студенты
          </button>


          <button className="button" onClick={() =>handleClickScroll("table")}>
        <img src={book} alt="AllStud"/>
        Список студентов
          </button>


          <button className="button" onClick={() => handleClickScroll("end")}>
            <img src={handshake} alt="AllInfo"/>
          Общая информация
          </button>
        </div>
    </div>
  );
}