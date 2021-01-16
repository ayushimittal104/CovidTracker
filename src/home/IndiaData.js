import React from 'react';

const IndiaData = props =>{
    let totalConfirmed=0;
    let totalActive=0;
    let totalRecovered=0;
    let totalDeceased = 0;
    {for (let state in props.data){
        let total = props.data[state].total;
        totalConfirmed += total.confirmed ? total.confirmed :0
        totalActive += total.other? total.other :0
        totalRecovered += total.recovered ? total.recovered :0
        totalDeceased += total.deceased ? total.deceased :0
    }
    }
    let boxClass={border:"1px solid black",height: "100px",width:"100px" ,display: "flex",flexDirection: "column",justifyContent: "space-around",padding: "10px"}
    return(
        <div>
            <div>INDIA</div>
            <div style={{display:"flex",justifyContent:"space-around"}} >
                <div style={boxClass}><div>Total Confirmed</div>{totalConfirmed}<div></div></div>
                <div style={boxClass}><div></div>Active<div>{totalActive}</div></div>
                <div style={boxClass}><div></div>Recovered<div>{totalRecovered}</div></div>
                <div style={boxClass}><div></div>Deceased<div>{totalDeceased}</div></div>
            </div>
        </div>

    )
}
export default IndiaData