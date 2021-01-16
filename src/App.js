import React,{Component} from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Homepage from './home/home';
import State from './state/state';
class App extends Component {
  constructor(props){
    super(props)
    this.state={data:''}
}
componentDidMount(){
    fetch('https://api.covid19india.org/v4/min/data.min.json')
    .then(res => res.json())
    .then(data =>this.setState({data:data}))
}
  render(){
    return (
    <div className="App">
        <BrowserRouter  exact path= '/'><Homepage data={this.state.data ? this.state.data : ""} /></BrowserRouter>
        <BrowserRouter path="/state/:stateCode"><State /></BrowserRouter>
    </div>
  )
  }
}

export default App;
