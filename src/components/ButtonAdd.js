import React, { Component } from "react";
import { Link } from 'react-router-dom'
import AddArticle from "./AddArticle";

class ButtonAdd extends Component {
  render(){
    return(
      <div>
        <Link to path ='/addarticle' component={AddArticle}> Button  +</Link>
      </div>
    )
  }
}

export default ButtonAdd;
