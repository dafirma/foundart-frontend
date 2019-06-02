import React, { Component }from "react";
//import './App.css';
import Navbar from "./components/Navbar";
//import List from './components/List';
import ButtonAdd from './components/ButtonAdd';
import Footer from "./components/Footer";

//import { Switch } from "react-router-dom";

class App extends Component{
  render(){
    return(
      <div>
        <Navbar/>
        <ButtonAdd/>
        <Footer/>
      </div>
    )

  }
}

export default App;
