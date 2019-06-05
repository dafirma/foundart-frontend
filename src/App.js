import React, { Component }from "react";
import './App.css';
import Navbar from "./components/Navbar";
import List from './components/List';
import ButtonAdd from './components/ButtonAdd';
import Footer from "./components/Footer";
import { Route } from "react-router-dom";
import ArticleDetails from './components/ArticleDetails'
import AddArticle from "./components/AddArticle";

class App extends Component{
  render(){
    return(
      <div className="app">
        <Navbar/>
        <Route exact path="/" component={List}/>
        <Route path ="/article/:id" component={ArticleDetails}/>
        <Route path ='/addarticle' component={AddArticle} />
        <ButtonAdd/>
        <Footer/>
      </div>
    )

  }
}

export default App;
