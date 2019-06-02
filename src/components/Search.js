import React, { Component } from 'react';

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
        Search
        <form onSubmit={this.onFormSubmit}>
          <input onChange={this.onInputChange} 
          value={this.state.term}
          name='term'
          text='text'
          placeholder='search article'
          />
          <button type='submit'>search</button>
        </form>
      </div>
    )
  }
}

export default Search;