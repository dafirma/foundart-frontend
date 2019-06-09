import React, { Component } from "react";
import './App.css';
import Navbar from "./components/Navbar";
import List from './components/List';
//import ButtonAdd from './components/ButtonAdd';
//import Footer from "./components/Footer";
import { Route } from "react-router-dom";
import ArticleDetails from './components/ArticleDetails'
import AddArticle from "./components/AddArticle";
import Favorites from './pages/Favorites';
import Login from './pages/Login';

import PrivateRoute from './components/auth/PrivateRoute';
import AnonRoute from './components/auth/AnonRoute';
import AuthProvider from './lib/AuthProvider';


class App extends Component {
  render() {
    return (
      <div className="app">
        <AuthProvider>
          <Navbar />
          <Route exact path="/" component={List} />
          <Route path="/article/:id" component={ArticleDetails} />
          <PrivateRoute path='/addarticle' component={AddArticle} />
          <Route path='/dashboard' component={List} />
          <PrivateRoute path='/favorites' component={Favorites} />
          <Route path='/login' component={Login} />
          {/* <Footer/> */}
        </AuthProvider>
      </div>
    )

  }
}

export default App;
