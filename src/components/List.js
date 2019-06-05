import React, { Component } from 'react';
import Item from './Item';
import data from '../data/articles.json';
//import '../stylesheets/List.css';

class List extends Component{
  constructor(){
    super();
    this.state={
      articles:[]
    }
  }
  componentDidMount(){
    const articles = data;
    this.setState({articles})
  }
  render(){
    const articles = [...this.state.articles];
    console.log(articles);
    return(
      <div className="container-item">
        <ul>
        {articles.map((article, index)=>
        {return <Item key={index} {...article}/>})}
        </ul>
      </div>
    )
  }
}

export default List;