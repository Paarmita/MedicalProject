/* eslint-disable no-redeclare */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import './style.css';
import Posts from './Posts';

class ViewPosts extends React.Component {
	render() {
		return (
			<div className="container mb-5 mainProfile">
				<h1 className="my-4 blogTitle">Posts</h1>
				<p> View all type of post like share experience, asking suggestions</p>
				<Posts />
			</div>
		);
	}
}

export default ViewPosts;
