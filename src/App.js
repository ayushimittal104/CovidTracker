import React,{Component} from 'react';
import './App.css';
import { BrowserRouter,Route } from 'react-router-dom';
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
        <BrowserRouter>
        <Route  exact path= '/'><Homepage data={this.state.data ? this.state.data : ""} /></Route>
        <Route exact path="/state/:stateCode"><State /></Route></BrowserRouter>
    </div>
  )
  }
}

export default App;
