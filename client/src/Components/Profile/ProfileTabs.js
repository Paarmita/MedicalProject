// It will take a list of users as props
// display the avatar of the users with names
// and on click, links to each user's profile
// Then we will use these tabs in profile.js

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DefaultProfile from '../../Images/avatar.png';
import Tabs from '../Settings/Tabs';

class ProfileTabs extends Component {
	render() {
		// const { following, followers, posts } = this.props;
		const { following, followers } = this.props;
		return (
			<div>
				<Tabs>
					<h6>Followers</h6>
					<span>
						{followers.map((person, i) => (
							<div key={i}>
								<div>
									<Link to={`/user/${person._id}`}>
										<img
											style={{
												borderRadius: '50%',
												border: '1px solid black',
											}}
											className="float-left mr-2"
											height="30px"
											width="30px"
											onError={i => (i.target.src = `${DefaultProfile}`)}
											src={`https://medical-umbrella.herokuapp.com/api/user/photo/${
												person._id
											}`}
											alt={person.name}
										/>
										<div>
											<p className="lead">{person.name}</p>
										</div>
									</Link>
								</div>
							</div>
						))}
					</span>
					<h6>Following</h6>
					<span>
						{following.map((person, i) => (
							<div key={i}>
								<div>
									<Link to={`/user/${person._id}`}>
										<img
											style={{
												borderRadius: '50%',
												border: '1px solid black',
											}}
											className="float-left mr-2"
											height="30px"
											width="30px"
											onError={i => (i.target.src = `${DefaultProfile}`)}
											src={`https://medical-umbrella.herokuapp.com/api/user/photo/${
												person._id
											}`}
											alt={person.name}
										/>
										<div>
											<p className="lead">{person.name}</p>
										</div>
									</Link>
								</div>
							</div>
						))}
					</span>
					{/* {isAuthenticated().user && (
						<div>
							<h6>Posts</h6>
							<span>
								{posts.map((post, i) => (
									<div key={i}>
										<div>
											<Link to={`/post/${post._id}`}>
												<div>
													<p className="lead">{post.title}</p>
												</div>
											</Link>
										</div>
									</div>
								))}
							</span>
						</div>
					)} */}
				</Tabs>
			</div>
		);
	}
}

export default ProfileTabs;
