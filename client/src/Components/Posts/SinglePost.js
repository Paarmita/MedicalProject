import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { singlePost, remove, like, unlike } from '../../Api/Post';
import DefaultPost from '../../Images/mountains.jpg';
import { isAuthenticated } from '../../Api';

class SinglePost extends Component {
	state = {
		post: '',
		redirectToPosts: false,
		redirectToSignin: false,
		error: '',
		like: false,
		likes: 0,
	};

	checkLike = likes => {
		const userId = isAuthenticated() && isAuthenticated().user._id;
		const match = likes.indexOf(userId) !== -1;
		return match;
	};

	componentDidMount = () => {
		const postId = this.props.match.params.postId;
		singlePost(postId).then(data => {
			if (data.error) {
				console.log(data.error);
			} else {
				this.setState({
					post: data,
					likes: data.likes.length,
					like: this.checkLike(data.likes),
				});
			}
		});
	};

	likeToggle = () => {
		if (!isAuthenticated()) {
			this.setState({ redirectToSignin: true });
			return false;
		}
		const callApi = this.state.like ? unlike : like;
		const userId = isAuthenticated().user._id;
		const postId = this.state.post._id;
		const token = isAuthenticated().token;

		callApi(userId, token, postId).then(data => {
			if (data.error) {
				console.log(data.error);
			} else {
				this.setState({
					like: !this.state.like,
					likes: data.likes.length,
				});
			}
		});
	};

	deletePost = () => {
		const postId = this.props.match.params.postId;
		const token = isAuthenticated().token;
		remove(postId, token).then(data => {
			if (data.error) {
				console.log(data.error);
			} else {
				this.setState({ redirectToPosts: true });
			}
		});
	};

	deleteConfirmed = () => {
		const answer = window.customconfirm('Are you sure you want to delete your account?');
		if (answer) {
			this.deletePost();
		}
	};

	renderPost = post => {
		// const posterId = post.postedBy ? `/user/${post.postedBy._id}` : '';
		// const posterName = post.postedBy ? post.postedBy.name : ' Unknown';
		const posterId = post.postedBy ? `/user/${post.postedBy._id}` : '';
		const posterName = post.postedBy ? post.postedBy.name : ' Unknown';
		const { like, likes } = this.state;

		return (
			<div className="card-body">
				<img
					src={`${process.env.REACT_APP_API_URL}/api/post/photo/${post._id}`}
					alt={post.title}
					onError={i => (i.target.src = `${DefaultPost}`)}
					className="img-thunbnail mb-3"
					style={{
						height: '300px',
						width: '100%',
						objectFit: 'cover',
					}}
				/>
				{like ? (
					<h3 onClick={this.likeToggle}>
						<i
							className="fa fa-thumbs-up text-success bg-dark"
							style={{ padding: '10px', borderRadius: '50%' }}
						/>{' '}
						{likes} Like
					</h3>
				) : (
					<h3 onClick={this.likeToggle}>
						<i
							className="fa fa-thumbs-up text-warning bg-dark"
							style={{ padding: '10px', borderRadius: '50%' }}
						/>{' '}
						{likes} Like
					</h3>
				)}

				<p className="card-text">{post.body}</p>
				<br />
				<p className="font-italic mark">
					Posted by <Link to={`${posterId}`}>{posterName} </Link>
					on {new Date(post.created).toDateString()}
				</p>
				<Link to="/posts" className="btn btn-raised btn-primary btn-sm mx-2">
					Back to posts
				</Link>
				{isAuthenticated().user && isAuthenticated().user._id === post.postedBy._id && (
					<>
						<Link
							to={`/post/edit/${post._id}`}
							className="btn btn-raised btn-warning btn-sm mx-2"
						>
							Update Post
						</Link>
						<button
							type="button"
							onClick={this.deleteConfirmed}
							className="btn btn-raised btn-danger btn-sm mx-2"
						>
							Delete Post
						</button>
					</>
				)}
			</div>
		);
	};

	render() {
		const { post, redirectToPosts, redirectToSignin } = this.state;
		// if (this.state.redirectToPosts) {
		// 	return <Redirect to="/posts" />;
		// }

		if (redirectToPosts) {
			return <Redirect to="/" />;
		}
		if (redirectToSignin) {
			return <Redirect to="/signin" />;
		}
		return (
			<div className="container mb-5">
				<h2 className="my-5">{post.title}</h2>
				{/* {this.props.match.params.postId} */}
				{/* {JSON.stringify(this.state.post)} */}
				{!post ? (
					<div className="jumbotron text-center">
						<h2>Loading...</h2>
					</div>
				) : (
					this.renderPost(post)
				)}
			</div>
		);
	}
}

export default SinglePost;
