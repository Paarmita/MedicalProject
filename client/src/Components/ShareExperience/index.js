/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable prefer-destructuring */
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { isAuthenticated } from '../../Api';
import { create } from '../../Api/Post';
import loader from '../../Images/loader2.gif';

class NewPost extends Component {
	constructor() {
		super();
		this.state = {
			title: '',
			body: '',
			description: '',
			treatmentTaken: '',
			photo: '',
			error: '',
			user: {},
			fileSize: 0,
			loading: false,
			redirectToPosts: false,
		};
	}

	componentDidMount() {
		this.postData = new FormData();
		this.setState({ user: isAuthenticated().user });
	}

	isValid = () => {
		const { title, body, fileSize } = this.state;
		if (fileSize > 100000) {
			this.setState({
				error: 'File size should be less than 100kb',
				loading: false,
			});
			return false;
		}
		if (title.length === 0 || body.length === 0) {
			this.setState({ error: 'All fields are required', loading: false });
			return false;
		}
		return true;
	};

	handleChange = name => event => {
		this.setState({ error: '' });
		const value = name === 'photo' ? event.target.files[0] : event.target.value;

		const fileSize = name === 'photo' ? event.target.files[0].size : 0;
		this.postData.set(name, value);
		this.setState({ [name]: value, fileSize });
	};

	clickSubmit = event => {
		event.preventDefault();
		this.setState({ loading: true });

		if (this.isValid()) {
			const userId = isAuthenticated().user._id;
			const token = isAuthenticated().token;

			create(userId, token, this.postData).then(data => {
				if (data.error) this.setState({ error: data.error });
				else {
					this.setState({
						loading: false,
						title: '',
						description: '',
						treatmentTaken: '',
						body: '',
						redirectToPosts: true,
					});
					// console.log('New Post:', data);
				}
			});
		}
	};

	newPostForm = (title, body, treatmentTaken, description) => (
		<form>
			<div className="form-group">
				<label className="text-muted">Profile Photo</label>
				<input
					onChange={this.handleChange('photo')}
					type="file"
					accept="image/*"
					className="form-control"
				/>
			</div>
			<div className="form-group">
				<label className="text-muted">Title</label>
				<input
					onChange={this.handleChange('title')}
					type="text"
					className="form-control"
					value={title}
				/>
			</div>
			<div className="form-group">
				<label className="text-muted">Summary</label>
				<input
					onChange={this.handleChange('description')}
					type="text"
					className="form-control"
					value={description}
				/>
			</div>

			<div className="form-group">
				<label className="text-muted">Treatment Taken</label>
				<textarea
					onChange={this.handleChange('treatmentTaken')}
					type="text"
					className="form-control"
					value={treatmentTaken}
				/>
			</div>

			<div className="form-group">
				<label className="text-muted">Detailed Description</label>
				<textarea
					onChange={this.handleChange('body')}
					type="text"
					className="form-control"
					value={body}
				/>
			</div>

			<button onClick={this.clickSubmit} className="btn btn-raised btn-primary">
				Create Post
			</button>
		</form>
	);

	render() {
		const {
			title,
			body,
			error,
			loading,
			redirectToPosts,
			treatmentTaken,
			description,
		} = this.state;

		if (redirectToPosts) {
			return <Redirect to="/posts" />;
		}

		return (
			<div className="container">
				<h2 className="my-5">Create a new post</h2>
				<div className="alert alert-danger" style={{ display: error ? '' : 'none' }}>
					{error}
				</div>

				{loading ? (
					<div>
						<img src={loader} alt="Loading..." />
					</div>
				) : (
					''
				)}

				{this.newPostForm(title, body, treatmentTaken, description)}
			</div>
		);
	}
}

export default NewPost;
