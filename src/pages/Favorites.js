import React, {Component} from 'react';
import axios from 'axios';


class Favorites extends Component{
  constructor(){
    super();
    this.state={
      favorites:[]
  
    }
    this.server = axios.create({
      baseURL:'http://localhost:5000',
      withCredentials:true
    })
  }
  componentDidMount(){
   // this.getFav()

  }

  getFav(){
    this.server.get('/favorite')
    .then(result=>{
      this.setState({
        favorites:result
      })
    })
  }
  render(){
    const {favorites} = this.state;
    return(
      <div>
        {favorites!== undefined ?
        favorites.map((favorite, index)=>
        <div>
        </div>):
      <div>No Favorites yet</div>}
        Favorites
      </div>
    )
  }
}


export default Favorites;