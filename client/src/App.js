

import React, { Component } from 'react';
import { Switch,Route } from 'react-router-dom';
import './App.css';
import Navigation   from './Components/Navbar';


import Signin       from './Components/Signin';
import Signup      from './Components/Signup';

import loader       from './Images/loader.gif';

class App extends Component {


  constructor()
  {
      super(); 
      this.state = {isLoading: true} 
      console.log(this.state.isLoading);
  }
  componentDidMount() 
  { 
      setTimeout(() => this.setState({isLoading: false}), 3000)
      console.log("componentDidMount");
  }

  render() {

if(this.state.isLoading){
    return(
        <div className="container col-lg-6 col-md-4 col-sm-6 col-9 mx-auto "><img src={loader} className="_loader" /></div>
      )
    }
    return (
      <Switch>
        <Route exact path='/' render={() => {
          return (
          <div>
            <Navigation />
          </div>
            )
        }}/>
        <Route  path ='/signin' component ={Signin}/>
        <Route  path ='/signup' component ={Signup}/>
      </Switch>
    );
  

  }
}

export default App;
