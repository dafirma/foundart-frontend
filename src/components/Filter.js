import React, { Component } from 'react';
import Select from 'react-select';
import ButtonOk from './ButtonOk';
import Distance from '../components/Distance';
import Divider from '@material-ui/core/Divider';

class Filter extends Component{
  constructor(){
    super();
    this.state={
      style:'All',
      distance:'All',
    }

  }

  onInputChangeStyle = e =>{
    let {label} = e;
    //console.log(label, value);
    this.setState({style:label});
    console.log(this.state)
  }

  onInputChangeDistance = e =>{
    let {label} = e;
    //console.log(label, value);
    this.setState({distance:label});
    console.log(this.state)
  } 
  render(){
    const style =[
      {label:"All", value:1},
      {label:"Visual Art", value:2},
      {label:"Fine Art", value:3},
      {label:"Decorative Art", value:4},
      {label:"Abstract Art", value:5},
      {label:"Sculpture", value:6},
      {label:"Realism", value:7},
      {label:"Graffiti", value:8},
      {label:"Music", value:5},
    ]
    /* const distance =[
      {label:"All", value:1},
      {label:"1 Km", value:2},
      {label:"2 Km", value:3},
      {label:"5 Km", value:4},
      {label:"10 Km", value:5},
    ] */
    const category = [
      {label: "All", value:1},
      {label: "Painting", value:2},
      {label: "Sculpture", value:3},
      {label: "Photography", value:4},
      {label: "Prop", value:5},
      {label: "Live Art", value:6},
      {label: "Drawing", value:7},
      {label: "Music", value:8}
    ]

    return(
      <div>
        <Select options={style} defaultValue="All" onChange={this.onInputChangeStyle}/>
        <Divider/>
        <Distance/>
        <Divider/>
        <Select options={category} defaultValue="All" onChange={this.onInputChangeCategory}/>
        <ButtonOk/>
      </div>
    )
  }
}

export default Filter