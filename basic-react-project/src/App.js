import logo from "./logo.svg";
import React, { Component } from 'react'
import "./App.css";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import { Route, Redirect, Switch  } from "react-router-dom";
import Movies from "./components/movies";
import Rentals from "./components/rentals";
import Customers from "./components/customers";
import NotFound from "./components/notFound";
import MovieForm from "./components/movieform";

class App extends Component {

  render(){
    return( 
    <main className="container">
      <Switch>
        <Route  path="/movies/:id"  component={MovieForm}/>
        <Route  path="/movies" exact component={Movies}/>
        <Route  path="/rentals" exact component={Rentals}/>
        <Route  path="/customers" exact component={Customers}/>
        <Route  path="/not-found" component={NotFound}/>
        <Redirect from="/" exact to="/movies"></Redirect>
        <Redirect to="/not-found"></Redirect>
      </Switch>  
    </main>

  )}
}

export default App;
