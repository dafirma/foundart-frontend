import React, { Component } from 'react';
import LongMenuLeft from './LongMenuLeft';


class Search extends Component{
  constructor(props){
    super(props);
    this.state={
      term:''
    }
  }

  onInputChange = e =>{
    let {name, value} =e.target;
    this.setState({ [name]: value})
    console.log(name, value);
    console.log(this.state)
  }
  onFormSubmit = e =>{
    e.preventDefault();
    //this.props.onTermSubmit(this.state);
  }
  render(){
    return(
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input onChange={this.onInputChange} 
          value={this.state.term}
          name='term'
          text='text'
          placeholder='search article'
          />
          <button type='submit'>search</button>
        </form>
        <div>
        <LongMenuLeft/>
      </div>
      </div>

    )
  }
}

export default Search;