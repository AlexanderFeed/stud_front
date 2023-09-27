
import React from 'react'
import JsonData from './data.json'
import "./Table.css"
 function Table(){
    const DisplayData=JsonData.info.map(
        (info)=>{
            return(
                <tr>
                    <td>{info.personalData.firstname}</td>
                    <td>{info.personalData.lastname}</td>
                    <td>{info.fcontact.ftelegram.telegram}</td>
                    <td>{info.fgit.git}</td>
                </tr>
            )
        }
    )
 
    return(
        <div>
            <table id="table" className="table">
                <thead>
                    <tr>
                    <th>Имя</th>
                    <th>Фамилия</th>
                    <th>Контакт</th>
                    <th>Гит</th>
                    </tr>
                </thead>
                <tbody>
                 
                    
                    {DisplayData}
                    
                </tbody>
            </table>
             
        </div>
    )
 }
 
 export default Table;