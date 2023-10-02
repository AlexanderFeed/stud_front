
import React, {useState} from 'react'
import JsonData from './data.json'
import "./Table.css"
export default function Table(){ 
    var contact = "";
    var count = 0;
    const DisplayData=JsonData.info.map(
        (info)=>{
            if (info.fcontact.ftelegram.hasTelegram === true){
                contact =(info.fcontact.ftelegram.telegram)

            }
            else if (info.fcontact.femail.hasEmail === null){
                contact =(info.fcontact.femail.email)
            }
            else if (info.fcontact.fphone.hasPhone === true){
                contact =(info.fcontact.fphone.phone)
            }
            count=count + 1;
            return(
                <tr>
                    <td>{count}</td>
                    <td>{info.personalData.lastnameInitials}</td>
                    <td>{info.fgit.git}</td>
                    <td>{contact}</td>
                    
                </tr>
            )
        }
    )
 
    return(
        <div>
            <table id="table" className="table">
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>Фамилия</th>
                    <th>Гит</th>
                    <th>Контакты</th>
                    </tr>
                </thead>
                <tbody>
                 
                    
                    {DisplayData}
                    
                </tbody>
            </table>
             
        </div>
    )
 }
 