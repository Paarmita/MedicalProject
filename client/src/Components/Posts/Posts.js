import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import { list } from '../../Api/Post';
// import DefaultPost from '../../Images/mountains.jpg';

class Posts extends React.Component {
	constructor() {
		super();
		this.state = {
			posts: [],
		};
	}

	componentDidMount() {
		list().then(data => {
			if (data.error) {
				console.log(data.error);
			} else {
				this.setState({ posts: data });
			}
		});
	}

	renderPosts = posts => {
		return (
			<div className="row">
				{posts.map((post, i) => {
					// map only works with arrays
					const posterId = post.postedBy ? `api/user/${post.postedBy._id}` : '';
					const posterName = post.postedBy ? post.postedBy.name : ' Unknown';

					return (
						<div className="card bg-light col-md-12 my-2" key={i}>
							<div className="card-body">
								{/* <img
									src={`${process.env.REACT_APP_API_URL}/api/post/photo/${
										post._id
									}`}
									alt={post.title}
									onError={i => (i.target.src = `${DefaultPost}`)}
									className="img-thunbnail mb-3"
									style={{ height: '200px', width: '100%' }}
								/> */}
								<h2 className="card-title">{post.title}</h2>
								<p>
									<span className="fa fa-clock-o" /> Posted by{' '}
									<Link to={`${posterId}`}>{posterName} </Link>
									on {new Date(post.created).toDateString()}
								</p>
								<p>
									<span className="badge badge-secondary">Food</span>{' '}
									<span className="badge badge-secondary">Ipsum</span>
								</p>
								<br />
								{/* <p className="card-text">{post.body.substring(0, 100)}</p> */}
								<p className="card-text">{post.body}</p>
								{/* only some charaters are visible in the posts */}
								<br />
								{/* <p className="font-italic mark">
									Posted by <Link to={`${posterId}`}>{posterName} </Link>
									on {new Date(post.created).toDateString()}
								</p> */}
								<Link
									to={`/post/${post._id}`}
									className="btn btn-raised btn-primary btn-sm"
								>
									Read more
								</Link>
							</div>
						</div>
					);
				})}
			</div>
		);
	};

	render() {
		const { posts } = this.state;
		return (
			<div>
				{' '}
				{/* <h2 className="mt-5 mb-5">{!posts.length ? 'Loading...' : 'Recent Posts'}</h2> */}
				{this.renderPosts(posts)}
			</div>
		);
	}
}

export default Posts;
