import React from 'react';
import {NavLink} from 'react-router-dom'
const StatesData = props =>{
    let states = [];
    {for (let state in props.data){
        let total = props.data[state].total;
        let s = <tr>
           <NavLink style={{textDecoration:"none"}} to={`/state/${state}`} params={{stateData:props.data[state].districts}}><td>{state}</td>
            <td>{total.confirmed ? total.confirmed :0}</td>
            <td>{total.other ? total.other : 0}</td>
            <td>{total.recovered ? total.recovered : 0}</td>
            <td>{total.deceased ? total.deceased : 0}</td></NavLink> 
        </tr>
        states.push(s)
    }}
    return(
        
        <div>
           <table>
               <thead>
               <tr>
               <th>State</th>
               <th>Confirmed</th>
               <th>Active</th>
               <th>Recovered</th>
               <th>Deceased</th>
               </tr>
               </thead>
               <tbody>
                   {states}
               </tbody>

               
           </table>
        </div>

    )
}
export default StatesData