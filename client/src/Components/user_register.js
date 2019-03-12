import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Nav from './navigation';
import axios from 'axios';
import {BASE_URL} from '../Api/Constants';


class Register extends Component{

	constructor(props){
		super(props);
		this.register = this.register.bind(this);

		this.state = {
			username : '' ,
			name : '' ,
			email : '' ,
			password : ''
		}
	}

	handle_name_change(event){
		this.setState({
		    name : event.target.value
		})
	}
	handle_username_change(event){
		this.setState({
		    username : event.target.value
		})
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

	register(){

		axios.post(BASE_URL + '/user/register', {
			username: this.state.username,
			name: this.state.name,
		    email: this.state.email,
		    password: this.state.password
		  })
		  .then(function (response) {
		    console.log(response);
		  })
		  .catch(function (error) {
		    console.log(error);
		  });
	}

	render(){
		return(
	
		<div>
		 <Nav />
			<div className="container col-lg-4">
			  <h2>User Register</h2>
			  <div className="form-group">
			      <label htmlFor="text">Name:</label>
			      <input type="text" className="form-control" value = {this.state.name} onChange = {(e) => {this.handle_name_change(e)}} />
			    </div>
			    <div className="form-group">
			      <label htmlFor="text">Username:</label>
			      <input type="text" className="form-control" value = {this.state.username} onChange = {(e) => {this.handle_username_change(e)}} />
			    </div>
			    <div className="form-group">
			      <label htmlFor="email">Email:</label>
			      <input type="email" className="form-control" value = {this.state.email} onChange = {(e) => {this.handle_email_change(e)}} />
			    </div>
			    <div className="form-group">
			      <label htmlFor="pwd">Password:</label>
			      <input type="password" className="form-control" value = {this.state.password} onChange = {(e) => {this.handle_password_change(e)}}/>
			    </div>
			    <button  className="btn btn-default" onClick = {this.register}>Register</button>
			</div>
		</div>
	  )
	}
}

export default Register;