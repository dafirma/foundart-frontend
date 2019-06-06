import React, { Component } from 'react';
import Item from './Item';
import data from '../data/articles.json';
import axios from 'axios';
import Icons from './Icons';
import '../stylesheets/List.css';

class List extends Component{
  constructor(){
    super();
    this.state={
      articles:[]
    }
    this.server = axios.create({
      baseURL:'http://localhost:5000',
      withCredentials:true
    })
  }
  componentDidMount(){
    const articles = data;
    this.setState({articles})
    this.getData()
  }

  getData(){
    this.server.get('/api/article')
    .then(result =>{
      console.log('desde la ruta',result.data)
    })

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
        <div>
          <Icons/>
        </div>
      </div>
    )
  }
}

export default List;