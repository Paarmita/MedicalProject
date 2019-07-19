/* eslint-disable react/no-unused-state */
/* eslint-disable prefer-destructuring */
/* eslint-disable react/sort-comp */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-multi-comp */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/no-deprecated */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable consistent-return */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable func-names */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import './style.css';
import DeleteUser from '../Users/deleteUser';
import Tabs from './Tabs';
import { isAuthenticated } from '../../Api';
import { read } from '../../Api/User';

class Settings extends Component {
	constructor() {
		super();
		this.state = {
			user: '',
			redirectToSignin: false,
		};
	}

	init = userId => {
		const token = isAuthenticated().token;
		read(userId, token).then(data => {
			if (data.error) {
				this.setState({ redirectToSignin: true });
			} else {
				this.setState({ user: data });
			}
		});
	};

	componentDidMount() {
		const userId = this.props.match.params.userId;
		this.init(userId);
	}

	componentWillReceiveProps(props) {
		const userId = props.match.params.userId;
		this.init(userId);
	}

	render() {
		const { user } = this.state;
		return (
			<div>
				<div className="container main">
					<div className="row">
						<div className="col-sm-9 col-md-12 col-lg-12 mx-auto">
							<h3 className="text-center">
								<strong>Settings</strong>
							</h3>
							<Tabs>
								Profile
								<span>
									<form>
										<DeleteUser userId={user._id} />
									</form>
								</span>
								Privacy
								<span>Privacy</span>
								Notifications
								<span>Notifications</span>
							</Tabs>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default Settings;
