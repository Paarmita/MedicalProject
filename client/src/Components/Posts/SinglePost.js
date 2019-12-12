/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Disqus from 'disqus-react';
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
		// console.log("dsjhbfjdhbgdbg", this);
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
		const answer = window.customconfirm('Are you sure you want to delete the post?');
		if (answer) {
			this.deletePost();
		}
	};

	renderPost = post => {
		// const posterId = post.postedBy ? `/user/${post.postedBy._id}` : '';
		// const posterName = post.postedBy ? post.postedBy.name : ' Unknown';
		const posterId = post.postedBy ? `/user/${post.postedBy._id}` : '';
		const posterName = post.postedBy ? post.postedBy.name : ' Unknown';
		// const { like, likes } = this.state;

		return (
			<div className="container mb-5">
				<Link to="/posts" className="btn btn-raised btn-primary my-3 mt-5">
					<span>
						<i className="fa fa-chevron-left mr-4" />
					</span>
					Back to posts
				</Link>
				<div className="row">
					<div className="col-md-8">
						<h2>{post.title}</h2>{' '}
					</div>
					<div className="col-md-4">
						{isAuthenticated().user &&
							isAuthenticated().user._id === post.postedBy._id && (
								<>
									<Link
										to={`/post/edit/${post._id}`}
										className="btn btn-raised btn-warning btn-sm mx-2"
									>
										<span>
											<i className="fa fa-edit mr-2" />
										</span>{' '}
										Update Post
									</Link>
									<button
										type="button"
										onClick={this.deleteConfirmed}
										className="btn btn-raised btn-danger btn-sm mx-2"
									>
										<span>
											<i className="fa fa-trash mr-2" />
										</span>
										Delete Post
									</button>
								</>
							)}
						{isAuthenticated().user && isAuthenticated().user.role === 'admin' && (
							<nav className="navbar fixed-bottom navbar-light bg-light">
								<div className="navbar-brand">
									<span className="navbar-text mr-3">Admin</span>
									<Link
										to={`/post/edit/${post._id}`}
										className="btn btn-raised btn-success"
									>
										Update Post
									</Link>{' '}
									<button
										type="button"
										onClick={this.deleteConfirmed}
										className="btn btn-raised btn-danger"
									>
										Delete Post
									</button>
								</div>
							</nav>
							// <div className="card mt-5">
							// 	<div className="card-body">
							// 		<h5 className="card-title">Admin</h5>
							// 		<p className="mb-2 text-danger">Edit/Delete as an Admin</p>
							// 		<Link
							// 			to={`/post/edit/${post._id}`}
							// 			className="btn btn-raised btn-warning btn-sm mr-5"
							// 		>
							// 			Update Post
							// 		</Link>
							// 		<button
							// 			onClick={this.deleteConfirmed}
							// 			className="btn btn-raised btn-danger"
							// 		>
							// 			Delete Post
							// 		</button>
							// 	</div>
							// </div>
						)}
					</div>
				</div>

				<p>
					<span className="fa fa-clock-o" /> Posted by{' '}
					<Link to={`${posterId}`}>{posterName} </Link>
					on {new Date(post.created).toDateString()}
				</p>
				{/* <p>
					<span className="badge badge-secondary">Food</span>{' '}
					<span className="badge badge-secondary">Ipsum</span>
				</p> */}
				<div className="row">
					<div className="col-md-12">
						<h5>Summary </h5>
					</div>
					<div className="col-md-12">
						<p>{post.description}</p>
					</div>
				</div>
				<div className="row">
					<div className="col-md-12">
						<h5>Treatment Taken </h5>
					</div>
					<div className="col-md-12">
						<p>{post.treatmentTaken}</p>
					</div>
				</div>
				<div className="row">
					<div className="col-md-12">
						<h5>Detailed Description</h5>
					</div>
					<div className="col-md-12">
						<p>{post.body}</p>
					</div>
				</div>
				<img
					src={`https://medical-umbrella.herokuapp.com/api/post/photo/${post._id}`}
					alt={post.title}
					onError={i => (i.target.src = `${DefaultPost}`)}
					className="img-thunbnail mb-3"
					style={{
						height: '300px',
						width: '100%',
						objectFit: 'cover',
					}}
				/>
				{/* {like ? (
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
				)} */}
				{/* <Disqus.CommentCount shortname={disqusShortname} config={disqusConfig}>
                    Comments
                </Disqus.CommentCount>
				<Disqus.CommentEmbed 
                    commentId={this.props.article.featuredComment}
                    showMedia={true}
                    height={160}
                /> */}
				<br />
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
		// console.log("dsjhbfjdhbgdbg", this);
		const disqusShortname = 'medicalcouncelling'; // found in your Disqus.com dashboard
		const disqusConfig = {
			url: this.props.match.params.url, // this.props.pageUrl {}`/post/${post._id}`}
			identifier: this.props.match.params.postId, // this.props.uniqueId
			title: post.title, // this.props.title
		};

		return (
			<div>
				{/* {this.props.match.params.postId} */}
				{/* {JSON.stringify(this.state.post)} */}
				<div className="container">
					{!post ? (
						<div className="jumbotron text-center">
							<h2>Loading...</h2>
						</div>
					) : (
						this.renderPost(post)
					)}
					<Disqus.DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
				</div>
			</div>
		);
	}
}

export default SinglePost;
