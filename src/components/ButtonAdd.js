import React, { Component } from "react";
import { Link } from 'react-router-dom'


class ButtonAdd extends Component {
  render(){
    return(
      <div>
        <Link to ={{pathname:'/addarticle'}}> Button  +</Link>
      </div>
    )
  }
}

export default ButtonAdd;
