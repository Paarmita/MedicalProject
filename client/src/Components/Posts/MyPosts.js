import React from 'react';
import { Link } from 'react-router-dom';
import { isAuthenticated } from '../../Api';
import { read } from '../../Api/User';
import { listByUser } from '../../Api/Post';

class MyPosts extends React.Component {
	constructor() {
		super();
		this.state = {
			user: { following: [], followers: [] },
			posts: [],
		};
	}

	componentDidMount() {
		const userId = this.props.match.params.userId;
		this.init(userId);
	}

	componentWillReceiveProps(props) {
		const userId = props.match.params.userId;
		this.init(userId);
	}

	init = userId => {
		const token = isAuthenticated().token;
		read(userId, token).then(data => {
			if (data.error) {
				console.log(data.error);
			} else {
				this.setState({ user: data });
				this.loadPosts(data._id);
			}
		});
	};

	loadPosts = userId => {
		const token = isAuthenticated().token;
		listByUser(userId, token).then(data => {
			if (data.error) {
				console.log(data.error);
			} else {
				this.setState({ posts: data });
			}
		});
	};

	render() {
		const { posts } = this.state;

		return (
			<div className="container mb-5">
				<h2 className="my-5">{!posts.length ? 'Loading...' : 'MyPosts'}</h2>
				{/* {JSON.stringify(posts)} */}
				{posts.map((post, i) => (
					<div key={i}>
						<div>
							<Link to={`/post/${post._id}`}>
								<div>
									<p>{post.title}</p>
								</div>
							</Link>
						</div>
					</div>
				))}
			</div>
		);
	}
}

export default MyPosts;
