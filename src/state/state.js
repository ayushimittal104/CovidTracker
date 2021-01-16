import React from 'react';
import { useLocation} from "react-router-dom"
const State = props =>{
    let location = useLocation()
    console.log(location)
    let states = [];
    {for (let state in props.data){
        let total = props.data[state].total;
        let s = <tr>
            <td>{state}</td>
            <td>{total.confirmed ? total.confirmed :0}</td>
            <td>{total.other ? total.other : 0}</td>
            <td>{total.recovered ? total.recovered : 0}</td>
            <td>{total.deceased ? total.deceased : 0}</td>
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
export default State