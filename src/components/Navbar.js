import React, { Component } from "react";
//import Menu from "./Menu";
import Search from "./Search";
import Filter from "./Filter";
//import List from "./List";



class Navbar extends Component{
  render(){
    return(
      <div>
        Navbar
        <Search/>
        <Filter/>
      
      </div>
    )
    
  }
}
export default Navbar