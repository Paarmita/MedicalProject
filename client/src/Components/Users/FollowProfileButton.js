import React, { Component } from 'react';
import { follow, unfollow } from '../../Api/User';

class FollowProfileButton extends Component {
	followClick = () => {
		this.props.onButtonClick(follow);
	};

	unfollowClick = () => {
		this.props.onButtonClick(unfollow);
	};

	render() {
		return (
			<div className="d-inline-block mx-4">
				{!this.props.following ? (
					<button
						type="button"
						onClick={this.followClick}
						className="btn btn-success btn-raised mr-5"
					>
						Follow
					</button>
				) : (
					<button
						type="button"
						onClick={this.unfollowClick}
						className="btn btn-warning btn-raised"
					>
						UnFollow
					</button>
				)}
			</div>
		);
	}
}

export default FollowProfileButton;
