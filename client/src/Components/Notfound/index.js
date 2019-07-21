import React from 'react';
import './style.css';

class Notfound extends React.Component {
	render() {
		return (
			<div className="notFound">
				<div className="c">
					<div className="_404">404</div>
					<div className="_1">THE PAGE</div>
					<div className="_2">WAS NOT FOUND</div>
					<a className="btn not_btn" href="/">
						BACK TO HOME
					</a>
				</div>
			</div>
		);
	}
}

export default Notfound;
