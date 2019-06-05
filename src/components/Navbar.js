import React, { Component } from "react";
//import Menu from "./Menu";
import Search from "./Search";
import Filter from "./Filter";
//import List from "./List";
import LongMenu from './LongMenu';
//import { Link } from 'react-router-dom';
import data from '../data/articles.json';
import menu from '../data/menu.json'


class Navbar extends Component{
  constructor(){
    super();
    this.state={
      options:[...menu]

    }
  }
  componentDidMount(){
    console.log(menu)
    const options = menu;
    this.setState(options)
  }
  
  render(){
    const options = [...this.state.options];
    console.log(options)
  
    return(
      <div>
        Navbar
        <Search/>
        <Filter/>
        <LongMenu/>
        
        
      </div>
    )
    
  }
}
export default Navbar