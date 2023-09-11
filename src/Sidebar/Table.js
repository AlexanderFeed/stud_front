import React from 'react';
import './Table.css';

export default function Table(){
    return (
        <table class='table'>
          <thead>
            <tr>
              <th>Фамилия</th>
              <th>Имя</th>
              <th>Гит</th>
              <th>Контакты</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Ячейка 1</td>
              <td>Ячейка 2</td>
              <td>Ячейка 3</td>
              <td>Ячейка 4</td>
            </tr>
            <tr>
              <td>Ячейка 5</td>
              <td>Ячейка 6</td>
              <td>Ячейка 7</td>
              <td>Ячейка 8</td>
            </tr>
          </tbody>
        </table>
      );
}
