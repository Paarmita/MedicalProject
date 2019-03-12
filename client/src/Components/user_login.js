import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Nav from './navigation';
import axios from 'axios';
import {BASE_URL} from '../Api/Constants';


class Login extends React.Component{


  	constructor(props){
		super(props);
		this.state = {
			email : '' ,
			password : '',
			username : ''
		}
		this.login = this.login.bind(this);
	}

	handle_email_change(event){
		this.setState({
		    email : event.target.value
		})
	}
	handle_password_change(event){
		this.setState({
		    password : event.target.value
		})
	}


   login(){
   		console.log('Called!',this);
		axios.post(BASE_URL + '/user/authenticate', {
		    email: this.state.email,
		    password: this.state.password
		  })
		  .then( (response) => {
		   console.log(response);
		   console.log(response.data.token);
		   sessionStorage.setItem('jwtToken', response.data.token);
		   this.setState({
		    username : response.data.user.username
		   })

		  })
		  .catch( (error) => {
		    console.log(error);
		  });
	}

	render(){
		return(
	
		<div>
		 <Nav username = {this.state.username} />
			<div className="container col-lg-4">
			  <h2>User Login</h2>

			    <div className="form-group">
			      <label htmlFor="email">Email:</label>
			      <input type="email" className="form-control" value = {this.state.email} onChange = {(e) => {this.handle_email_change(e)}} />
			    </div>
			    <div className="form-group">
			      <label htmlFor="pwd">Password:</label>
			      <input type="password" className="form-control" value = {this.state.password} onChange = {(e) => {this.handle_password_change(e)}}/>
			    </div>
			    <button className="btn btn-default" onClick = {this.login}>Login</button>
			   
			</div>
		</div>
	  )
	}
}

export default Login;
