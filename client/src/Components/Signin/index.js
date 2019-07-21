import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { signin, authenticate } from '../../Api';
import loader from '../../Images/loader2.gif';
import './style.css';

class Signin extends Component {
	constructor() {
		super();
		this.state = {
			email: '',
			password: '',
			error: '',
			redirectToReferer: false,
			loading: false,
			open: false,
		};
	}

	handleChange = name => event => {
		this.setState({ error: '' });
		this.setState({ [name]: event.target.value });
	};

	clickSubmit = event => {
		event.preventDefault();
		this.setState({ loading: true });
		const { email, password } = this.state;
		const user = {
			email,
			password,
			open: true,
		};
		// console.log(user);
		signin(user).then(data => {
			if (data.error) {
				this.setState({ error: data.error, loading: false });
			} else {
				// authenticate
				// this.authenticate(data);
				authenticate(data, () => {
					this.setState({ redirectToReferer: true }); // redirect
				});
			}
		});
	};

	render() {
		const { email, password, error, redirectToReferer, loading, open } = this.state;

		if (redirectToReferer) {
			return <Redirect to="/" />;
		}
		return (
			<div className="container signIn">
				<div className="row">
					<div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
						<div className="card card-signin my-5">
							<div className="card-body">
								<h5 className="card-title text-center">Sign In</h5>
								<div
									className="alert alert-danger"
									style={{ display: error ? '' : 'none' }}
								>
									{error}
								</div>
								{loading ? (
									<div>
										<img src={loader} alt="Loading..." />
									</div>
								) : (
									''
								)}
								<div
									className="alert alert-info"
									style={{ display: open ? '' : 'none' }}
								>
									New account is successfully created. Please Sign In.
								</div>
								<form className="form-signin">
									<div className="form-label-group">
										<input
											onChange={this.handleChange('email')}
											type="email"
											className="form-control"
											value={email}
											required
										/>
										<label>Email address</label>
									</div>

									<div className="form-label-group">
										<input
											onChange={this.handleChange('password')}
											type="password"
											className="form-control"
											value={password}
											required
										/>
										<label>Password</label>
									</div>
									<p className="text-right">
										<small>
											<a href="/">Forgot password?</a>
										</small>
									</p>
									<button
										className="btn btn-lg btn-primary btn-block text-uppercase signBtn"
										type="submit"
										onClick={this.clickSubmit}
									>
										Sign in
									</button>
									<hr className="my-4" />
									<p className="text-center">
										Don't have a account?<a href="/signup"> SignUp</a>
									</p>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default Signin;
