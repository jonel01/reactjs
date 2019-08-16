import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Sidebar from './components/layout/Sidebar';
import axios from 'axios';
import Home from './components/headerComponents/Home';
import About from './components/headerComponents/About';
import Contact from './components/headerComponents/Contact';
import Data from './components/headerComponents/Data';

class App extends Component{

  async componentDidMount(){
    const res = await axios.get('https://jsonplaceholder.typicode.com/users')
    console.log(res.data);
  }

  render(){
    return (
      <BrowserRouter>
        <Navbar />
        <div className="App">   
        <div>
          <Sidebar /> 
        </div>
        
           
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/about' component={About}></Route>
          <Route exact path='/contact' component={Contact}></Route>
          <Route exact path='/data' component={Data}></Route>
        </div>
      </BrowserRouter>
    );
  }
}

export default App
