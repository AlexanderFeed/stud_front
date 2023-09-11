import React from "react";
import './PopUp.css';

const PopUp = ({Active, SetActive, children, WhatButton}) => {
    return(
        <div className={Active ? 'popup active':'popup'} onClick={()=>SetActive(false)}>
            <div className={Active ? 'popupcontent active':'popupcontent'}onClick={(e)=>e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
}

export default PopUp;