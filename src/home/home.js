import React, { Component } from 'react';
import IndiaData from './IndiaData';
import StatesData from './StatesData';
 class HomePage extends Component{

    render(){

       return this.props.data ? <div>
           <div>Covid Tracker</div>
           <IndiaData  data ={this.props.data}/>
           <StatesData  data ={this.props.data}/>
           </div> : ""
    }
 }
 export default HomePage