/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
/* eslint-disable prefer-destructuring */
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { singlePost, update } from '../../Api/Post';
import { isAuthenticated } from '../../Api';
import DefaultPost from '../../Images/mountains.jpg';

class EditPost extends Component {
	constructor() {
		super();
		this.state = {
			id: '',
			title: '',
			body: '',
			description: '',
			treatmentTaken: '',
			redirectToSinglePost: false,
			error: '',
			fileSize: 0,
			loading: false,
		};
	}

	componentDidMount() {
		this.postData = new FormData();
		const postId = this.props.match.params.postId;
		this.init(postId);
	}

	init = postId => {
		singlePost(postId).then(data => {
			if (data.error) {
				this.setState({ redirectToSinglePost: true });
			} else {
				this.setState({
					id: data._id,
					title: data.title,
					body: data.body,
					description: data.description,
					treatmentTaken: data.treatmentTaken,
					error: '',
				});
			}
		});
	};

	isValid = () => {
		const { title, body, fileSize } = this.state;
		if (fileSize > 1000000) {
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
			const postId = this.state.id;
			const token = isAuthenticated().token;

			update(postId, token, this.postData).then(data => {
				if (data.error) this.setState({ error: data.error });
				else {
					this.setState({
						loading: false,
						title: '',
						body: '',
						description: '',
						treatmentTaken: '',
						redirectToSinglePost: true,
					});
				}
			});
		}
	};

	editPostForm = (title, body, description, treatmentTaken) => (
		<form>
			<div className="form-group">
				<label className="text-muted">Post Photo</label>
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
				<label className="text-muted">Body</label>
				<textarea
					onChange={this.handleChange('body')}
					type="text"
					className="form-control"
					value={body}
				/>
			</div>

			<button type="button" onClick={this.clickSubmit} className="btn btn-raised btn-primary">
				Update Post
			</button>
		</form>
	);

	render() {
		const {
			id,
			title,
			body,
			redirectToSinglePost,
			error,
			loading,
			description,
			treatmentTaken,
		} = this.state;

		if (redirectToSinglePost) {
			// return <Redirect to={`/user/${isAuthenticated().user._id}`} />;
			return <Redirect to={`/post/${id}`} />;
		}

		return (
			<div className="container">
				<h2 className="my-5">{title}</h2>
				<div className="alert alert-danger" style={{ display: error ? '' : 'none' }}>
					{error}
				</div>

				{loading ? (
					<div className="jumbotron text-center">
						<h2>Loading...</h2>
					</div>
				) : (
					''
				)}

				<img
					style={{ height: '200px', width: 'auto' }}
					className="img-thumbnail"
					src={`https://medical-umbrella.herokuapp.com/api/post/photo/${id}?${new Date().getTime()}`}
					onError={i => (i.target.src = `${DefaultPost}`)}
					alt={title}
				/>

				{/* {this.editPostForm(title, body, description, treatmentTaken)} */}
				{isAuthenticated().user.role === 'admin' ||
					(isAuthenticated().user._id === id &&
						this.editPostForm(title, body, description, treatmentTaken))}
			</div>
		);
	}
}

export default EditPost;
