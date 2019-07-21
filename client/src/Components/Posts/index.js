import React from 'react';
import './style.css';
import Posts from './Posts';

class ViewPosts extends React.Component {
	render() {
		return (
			<div className="container mb-5">
				<h2 className="my-5">Posts</h2>
				<p> View all type of post like share experience, asking suggestions</p>
				<Posts />
			</div>
		);
	}
}

export default ViewPosts;
